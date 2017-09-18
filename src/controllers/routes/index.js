const router = require('express').Router()
const Album = require('../../models/albums')

router.get('/', (req, res) => {
   Album.getAlbums()
    .then(albums => {
      res.render('home', {albums})
    })
    .catch(error => {
      res.status(500).render('error', {error})
    })
})

router.get('/albums/:albumID', (req, res) => {
  const albumID = req.params.albumID
  Album.getAlbumsByID(albumID)
    .then(albums => {
      const album = albums[0]
      res.render('album', {album})
    })
    .catch(error => {
      res.status(500).render('error', {error})
    })
})

router.use((req, res) => {
  res.status(404).render('not_found')
})

module.exports = router
