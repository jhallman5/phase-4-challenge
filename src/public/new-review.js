document.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector('.button')) {
    document.querySelector('.button').addEventListener('click', (event) => {
      if(document.querySelector('.textarea').value.replace(/\s/g,'').length < 1) {
        event.preventDefault()
        alert("You can't submit an empty review!")
      }
    })
  }
})
