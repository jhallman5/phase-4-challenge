const router = require('express').Router()
const Album = require('../../models/albums')
const Review = require('../../models/reviews')

router.get('/:albumId/reviews/new', (req,res) => {
  Album.findById(req.params.albumId)
    .then(album => res.render('new-review', {album, session: req.session.passport}))
    .catch(error => res.status(500).render('error', {error}))
})

router.post('/:albumId/reviews/new', (req, res) => {
  const { content } = req.body
  const { albumId } = req.params
  const userId = req.session.passport.user
  Review.create(userId, albumId, content)
    .then( () => res.redirect(`/albums/${albumId}`))
    .catch( error => res.status(500).render('error', {error}))
})

router.delete('/:albumId/reviews/:reviewId', (req, res) => {
  Review.destroy(req.params.reviewId)
    .then(() => res.sendStatus(200))
    .catch(error => res.status(500).render('error', {error}))
})

router.get('/:albumId', (req, res) => {
  Album.findById(req.params.albumId)
    .then(album => res.render('album', {album, session: req.session.passport}))
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
