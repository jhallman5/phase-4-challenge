const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/users')

passport.use('local', new LocalStrategy({
  usernameField: 'email'
}, (email, password, done) =>
  User.findByEmail(email)
    .then(user => {
      if(!user) return done(null, false)
      if(user.password != password) return done(null, false)
      return done(null, user)
    })
    .catch(error => done(error))
))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(error => done(error))
})

module.exports = passport
