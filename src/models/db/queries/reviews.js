const db = require('../init')

const getNumberOfReviews = (numOfReviews) =>
  db.any('SELECT * FROM reviews ORDER BY created_on DESC LIMIT $1', [numOfReviews])


const create = (userId, albumId, content) =>
  db.none('INSERT INTO reviews (user_id, album_id, content) VALUES ($1, $2, $3)',[userId, albumId, content])

module.exports = {
  getNumberOfReviews,
  create,
}
