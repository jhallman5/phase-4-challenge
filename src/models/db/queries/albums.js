const db = require('../init')

const getAlbums = () =>
  db.any('SELECT * FROM albums')


const findById = (albumId) =>
  db.any('SELECT *, reviews.id AS review_id FROM albums LEFT OUTER JOIN reviews ON albums.id = reviews.album_id LEFT OUTER JOIN users ON reviews.user_id = users.id WHERE albums.id = $1 ORDER BY created_on DESC', [albumId])

module.exports = {
  getAlbums,
  findById,
}
