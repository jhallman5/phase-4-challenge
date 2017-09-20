document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.my-review').forEach(card =>
    card.addEventListener('click', (event) => {
      confirm("Are you sure you want to delete this review?")
        ? deleteReview(event.currentTarget.dataset.albumid, event.currentTarget.dataset.reviewid)
        : event.preventDefault()
  }))

  const deleteReview = (albumId, reviewId) => {
    fetch(`http://localhost:3000/albums/${albumId}/reviews/${reviewId}`, {method: 'DELETE'})
      .then(response => response.text())
      .then( () => {
        location.reload(true)
      })
  }

})
