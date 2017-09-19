const Reviews = require('./db/queries/reviews')

const getNumberOfReviews = (numOfReviews) =>
  Reviews.getNumberOfReviews(numOfReviews)

const create = (userId, albumId, content) =>{
  console.log( "=-=-=-> userId", userId )
return  Reviews.create(userId, albumId, content)
}
module.exports = {
  getNumberOfReviews,
  create,
}
