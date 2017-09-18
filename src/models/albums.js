const Albums = require('./db/queries/albums')

const getAlbums = () =>
   Albums.getAlbums()
    .then(albums => {
      return albums
    })


const getAlbumsByID = (albumID) => {
  return Albums.getAlbumsByID(albumID)
}

module.exports = {
  getAlbums,
  getAlbumsByID,
}
