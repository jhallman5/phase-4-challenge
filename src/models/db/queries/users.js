const db = require('../init')

const findById = (id) =>
  db.any('SELECT *, reviews.id AS review_id FROM users LEFT OUTER JOIN reviews ON users.id = reviews.user_id LEFT OUTER JOIN albums ON albums.id = reviews.album_id WHERE users.id = $1 ORDER BY created_on DESC',[id])

const findByEmail = (email) =>
  db.oneOrNone('SELECT * from users WHERE users.email = $1',[email])

module.exports = {
  findById,
  findByEmail
}
