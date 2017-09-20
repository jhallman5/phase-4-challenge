const moment = require('moment')
const Albums = require('./db/queries/albums')

const getAlbums = () =>
   Albums.getAlbums()

const findById = (albumId) =>
  Albums.findById(albumId)
    .then(album => ({
      id: album[0].album_id,
      title: album[0].title,
      artist: album[0].artist,
      reviews: album.map(review => ({
        id: review.review_id,
        user_id: review.user_id,
        title: review.title,
        username: review.username,
        content: review.content,
        created_on: moment(review.created_on).format('MMM Do YYYY')
      }))
    }))

module.exports = {
  getAlbums,
  findById,
}
