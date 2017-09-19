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
        .then(reviews => {
          res.render('home', {albums, reviews})
        })
    })
    .catch(error => {
      res.status(500).render('error', {error})
    })
})

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})

router.post('/sign-in', (req, res, next) =>{
  passport.authenticate('local',{ successRedirect: '/profile',
                                  failureRedirect: '/'})(req, res, next)
})

router.get('/profile', (req, res) => {
  res.redirect(`/user/${req.user.id}`)
})

router.use('/user', userRouter)
router.use('/albums', albumRouter)

router.use((req, res) => {
  res.status(404).render('not-found')
})

module.exports = router
