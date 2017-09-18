const db = require('../init')

const getNumberOfReviews = (numOfReviews) => {
  return db.any('SELECT * FROM reviews ORDER BY created_on DESC LIMIT $1', [numOfReviews])
}

module.exports = {
  getNumberOfReviews,
}
