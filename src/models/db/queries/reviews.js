const db = require('../init')

const getNumberOfReviews = (numOfReviews) =>
  db.any('SELECT * FROM reviews LEFT OUTER JOIN users ON reviews.user_id = users.id LEFT OUTER JOIN albums ON reviews.album_id = albums.id ORDER BY created_on DESC LIMIT $1', [numOfReviews])

const create = (userId, albumId, content) =>
  db.none('INSERT INTO reviews (user_id, album_id, content) VALUES ($1, $2, $3)',[userId, albumId, content])

const destroy = (reviewId) =>
  db.none('DELETE FROM reviews WHERE reviews.id = $1',[reviewId])

module.exports = {
  getNumberOfReviews,
  create,
  destroy,
}
