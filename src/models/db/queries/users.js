const db = require('../init')

const findById = (id) =>
  db.one('SELECT * FROM users WHERE id = $1',[id])

module.exports = {
  findById
}
  
