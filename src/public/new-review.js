document.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector('.new-review')) {
    document.querySelector('.new-review').addEventListener('click', (event) => {
      if(document.querySelector('.textarea').value.replace(/\s/g,'').length < 1) {
        event.preventDefault()
        alert("You can't submit an empty review!")
      }
    })
  }
})
