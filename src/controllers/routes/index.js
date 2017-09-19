const router = require('express').Router()
const userRouter = require('./users')
const albumRouter = require('./albums')

const Album = require('../../models/albums')
const Reviews = require('../../models/reviews')

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

router.use('/user', userRouter)
router.use('/albums', albumRouter)

router.use((req, res) => {
  res.status(404).render('not_found')
})

module.exports = router
