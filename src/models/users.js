const moment = require('moment')
const User = require('./db/queries/users')

const findById = (id) =>
  User.findById(id)
    .then( user => ({
        id: user[0].user_id,
        email: user[0].email,
        member_since: user[0].member_since,
        reviews: user.map(review => ({
          id: review.review_id,
          album_title: review.title,
          album_id: review.album_id,
          content: review.content,
          created_on: moment(review.created_on).format('MMM Do YYYY')
        }))
    }))

const findByEmail = (email) =>
  User.findByEmail(email)

module.exports = {
  findById,
  findByEmail
}
