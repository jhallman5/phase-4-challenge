const db = require('../init')

const findById = (id) =>
  db.any('SELECT *, reviews.id AS review_id, users.id AS uid FROM users LEFT OUTER JOIN reviews ON users.id = reviews.user_id LEFT OUTER JOIN albums ON albums.id = reviews.album_id WHERE users.id = $1 ORDER BY created_on DESC',[id])

const findByEmail = (email) =>
  db.oneOrNone('SELECT * from users WHERE users.email = $1',[email])

const create = (username, email, password) =>
  db.any('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password])

module.exports = {
  findById,
  findByEmail,
  create
}
