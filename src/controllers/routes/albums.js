const router = require('express').Router()
const Album = require('../../models/albums')

router.get('/:albumId/reviews/new', (req,res) => {
  Album.findById(req.params.albumId)
    .then(album =>
      res.render('new-review', {album})
    )
})


router.get('/:albumId', (req, res) => {
  Album.findById(req.params.albumId)
    .then(album => {
      res.render('album', {album})
    })
    .catch(error => {
      res.status(500).render('error', {error})
    })
})

module.exports = router
