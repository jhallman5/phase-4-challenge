document.querySelectorAll('.review').forEach(review => review.addEventListener('click', (event) =>{
  event.preventDefault()
  confirm("Are you sure you want to delete this review?")
    ? alert("YES")
    : alert("NO")
}))
