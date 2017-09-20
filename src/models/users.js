const moment = require('moment')
const User = require('./db/queries/users')

const findById = (id) => {
    console.log( "=-=-=-> id", id )
  return User.findById(id)
    .then( user => {
      console.log( "=-=-=-> user inf FIND", user )
      return {
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
    }})
}

const findByEmail = (email) =>
  User.findByEmail(email)

const create = (username, email, password) =>
  User.create(username, email, password)
  .then( user => {
    return {
      id: user[0].id,
      username: user[0].username,
      email: user[0].email,
      member_since: moment(user[0].member_since).format('MMM Do YYYY'),
      reviews: null
    }
  })
    .then(user2 => {
      return user2
    })

module.exports = {
  findById,
  findByEmail,
  create
}
