const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy((username, password, done) =>
  User.findByUsername(username)
    .then(user => {
      if(!user) done(null, false)
      if(user.password != password) done(null, false)
      return done(null, user)
    })
    .catch(error => done(error))
))

passport.serializeUser( (user, done) => {
  done(null, user.id)
})

passport.deserializeUser( (id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(error => done(error))
})

module.exports = passport
