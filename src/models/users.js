const User = require('./db/queries/users')

const findById = (id) =>
  User.findById(id)
    .then( user => ({
        id: user[0].user_id,
        email: user[0].email,
        member_since: user[0].member_since,
        reviews: user.map(review => ({
          id: review.review_id,
          album_id: review.ablum_id,
          content: review.content,
          created_on: review.created_on
        }))
    }))


module.exports = {
  findById
}
