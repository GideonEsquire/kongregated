const loader = document.querySelector('.loader')
const main = document.querySelector('.main')

setTimeout(() => {
  loader.style.opacity = 0
  loader.style.display = 'none'

  main.style.display = 'block'
  setTimeout(() => (main.style.opacity = 1), 50)
}, 3000)
