const User = require('./db/queries/users')

const findById = (id) =>
  User.findById(id)


module.exports = {
  findById
}
