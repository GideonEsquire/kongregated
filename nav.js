var prevScrollpos = window.pageYOffset
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset
  setTimeout(() => {
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByClassName('btn')[0].style.top = '0'
    } else {
      document.getElementsByClassName('btn')[0].style.top = '-50px'

      // Can't quite figure this out
      // document.getElementsByClassName("sidebar")[0].style.left = "-250px";
      // document.getElementsByClassName("sidebar")[0].style.transform = "translateX(-250px)";
      // console.log(document.getElementsByClassName("sidebar")[0])
    }
    prevScrollpos = currentScrollPos
  }, 100)
}
