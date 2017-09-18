const Reviews = require('./db/queries/reviews')

const getNumberOfReviews = (numOfReviews) =>
  Reviews.getNumberOfReviews(numOfReviews)

module.exports = {
  getNumberOfReviews
}
