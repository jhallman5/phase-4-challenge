const moment = require('moment')
const User = require('./db/queries/users')
const bcrypt = require('bcrypt')

const findById = (id) =>
  User.findById(id)
    .then( user => ({
        id: user[0].uid,
        username: user[0].username,
        email: user[0].email,
        member_since: moment(user[0].member_since).format('MMM Do YYYY'),
        reviews: user.map(review => ({
          id: review.review_id,
          user_id: review.user_id,
          username: review.username,
          title: review.title,
          album_id: review.album_id,
          content: review.content,
          created_on: moment(review.created_on).format('MMM Do YYYY')
        }))
    }))
    .catch( error => console.log('error in model' , error))

const findByEmail = (email) =>
  User.findByEmail(email)

const create = (username, email, password) =>
bcrypt.hash(password, 10)
  .then(hash =>
    User.create(username, email, hash)
    .then( user => ({
      id: user[0].id,
      username: user[0].username,
      email: user[0].email,
      member_since: moment(user[0].member_since).format('MMM Do YYYY'),
      reviews: null
    }))
    .catch( error => console.log('error in model' , error))
  )
  .catch( error => console.log('error in model from bcrypt' , error))

module.exports = {
  findById,
  findByEmail,
  create
}
