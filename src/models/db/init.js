const dbName = 'vinyl'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`

// For debugging purposes
const initOptions = {
  query : e => console.log('QUERY ->', e.query),
  receive: (data, result, e) => {
    console.log('QUERY Results ->', data)
    return data
  }
}
const pgp = require('pg-promise')(initOptions)
const db = pgp(connectionString)

module.exports = db
