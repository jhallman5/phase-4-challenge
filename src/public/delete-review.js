document.querySelectorAll('.my-review').forEach(review => review.addEventListener('click', (event) => {
  const data = event.target.dataset
  confirm("Are you sure you want to delete this review?")
    ? deleteReview(data.albumid, data.reviewid)
    : event.preventDefault()
}))

const deleteReview = (albumId, reviewId, target) => {
  fetch(`/albums/${albumId}/reviews/${reviewId}`, {method: 'DELETE'})
    .then(response => response.text())
    .then( () => {
      location.reload(true)
    })
}
