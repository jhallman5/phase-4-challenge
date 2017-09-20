const moment = require('moment')
const Reviews = require('./db/queries/reviews')

const getNumberOfReviews = (numOfReviews) =>
  Reviews.getNumberOfReviews(numOfReviews)
    .then( reviews => {
      reviews.forEach(review => review.created_on = moment(review.created_on).format('MMM Do YYYY'))
      return reviews
    })

const create = (userId, albumId, content) =>
  Reviews.create(userId, albumId, content)

module.exports = {
  getNumberOfReviews,
  create,
}
