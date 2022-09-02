var prevScrollpos = window.pageYOffset
window.onscroll = () => {
  const cb = document.querySelector('#checkbox')
  var currentScrollPos = window.pageYOffset

  if (cb.checked || prevScrollpos > currentScrollPos) {
    document.getElementsByClassName('btn')[0].style.top = '0'
  } else {
    document.getElementsByClassName('btn')[0].style.top = '-50px'
  }

  setTimeout(() => {
    prevScrollpos = currentScrollPos
  }, 1000)
}
