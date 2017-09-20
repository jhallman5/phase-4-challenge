document.querySelectorAll('.my-review').forEach(card =>
  card.addEventListener('click', (event) => {
    confirm("Are you sure you want to delete this review?")
      ? deleteReview(event.target.dataset.albumid, event.target.dataset.reviewid)
      : event.preventDefault()
}))

const deleteReview = (albumId, reviewId, target) => {
  fetch(`http://localhost:3000/albums/${albumId}/reviews/${reviewId}`, {method: 'DELETE'})
    .then(response => response.text())
    .then( () => {
      location.reload(true)
    })
}
