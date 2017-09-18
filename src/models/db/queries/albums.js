const db = require('../init')

const getAlbums = () =>
  db.any('SELECT * FROM albums')


const getAlbumsByID = (albumID) =>
  db.any('SELECT * FROM albums WHERE id = $1', [albumID])

module.exports = {
  getAlbums,
  getAlbumsByID,
}
