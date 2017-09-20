const router = require('express').Router()
const userRouter = require('./users')
const albumRouter = require('./albums')

const User = require('../../models/users')
const Album = require('../../models/albums')
const Reviews = require('../../models/reviews')
const passport = require('../../auth/passport')

router.get('/', (req, res) => {
   Album.getAlbums()
    .then(albums => {
      Reviews.getNumberOfReviews(3)
        .then(reviews => res.render('home', {albums, reviews, session: req.session.passport}))
        .catch(error => res.status(500).render('error', {error}))
    })
    .catch(error => res.status(500).render('error', {error}))
})

router.get('/sign-up',(req, res) => {
  res.render('sign-up')
})

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})

router.post('/sign-up', (req, res, next) => {
  const { username, email, password } = req.body
  User.create(username, email, password)
    .then(user => {
      req.login(user, function(error) {
        console.log( "=-=-=-> user inside login", user )
        if (error) return next(error)
        res.redirect('/profile');
       })
    })
})
router.post('/sign-in', (req, res, next) => {
  passport.authenticate('local',{ successRedirect: '/profile',
                                  failureRedirect: '/'})(req, res, next)
})

router.get('/profile', (req, res) => {
  console.log( "=-=-=-> req.user", req.user )
  res.redirect(`/users/${req.user.id}`)
})

router.get('/sign-out', (req, res) => {
  req.session.destroy(() => res.redirect('/'))
})

router.use('/users', userRouter)
router.use('/albums', albumRouter)

router.use((req, res) => {
  res.status(404).render('not-found')
})

module.exports = router
