const router = require('express').Router()
const Album = require('../../models/albums')


router.get('/:albumID', (req, res) => {
  const albumID = req.params.albumID
  Album.findByID(albumID)
    .then(album => {
      res.render('album', {album})
    })
    .catch(error => {
      res.status(500).render('error', {error})
    })
})

module.exports = router
