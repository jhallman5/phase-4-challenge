const Albums = require('./db/queries/albums')

const getAlbums = () =>
   Albums.getAlbums()
    .then(albums => {
      return albums
    })


const findByID = (albumID) =>
  Albums.findByID(albumID)
    .then(album => ({
      id: album[0].album_id,
      title: album[0].title,
      artist: album[0].artist,
      reviews: album.map(review => ({
        id: review.review_id,
        user_id: review.user_id,
        username: review.username,
        content: review.content,
        created_on: review.created_on
      }))
    }))

module.exports = {
  getAlbums,
  findByID,
}
