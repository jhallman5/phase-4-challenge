const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models/albums')

const port = process.env.PORT || 3000

const app = express()

require('ejs')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/bulma', express.static('node_modules/bulma/css'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
   db.getAlbums()
    .then(albums => {
      res.render('home', {albums})
    })
    .catch(error => {
      res.status(500).render('error', {error})
    })
})

app.get('/albums/:albumID', (req, res) => {
  const albumID = req.params.albumID
  db.getAlbumsByID(albumID)
    .then(albums => {
      const album = albums[0]
      res.render('album', {album})
    })
    .catch(error => {
      res.status(500).render('error', {error})
    })
})

app.use((req, res) => {
  res.status(404).render('not_found')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
