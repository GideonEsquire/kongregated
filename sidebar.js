$('#sidebar').append('<input type="checkbox" id="checkbox" />')

$('#sidebar').append(
  $('<label class="btn" for="checkbox"></label>').append(
    '<i class="fa fa-bars"></i>' + '<span>Menu</span>'
  )
)

$('#sidebar').append(
  $('<div class="sidebar"></div>').append(
    $('<ul></ul>').append(
      '<a id="/" href="/" >' +
        '<li><i class="fa fa-home"></i>Home</li>' +
        '</a>'
    ),
    $('<ul></ul>').append(
      '<a id="/about/" href="/about">' +
        '<li><i class="fa fa-address-card"></i>About</li>' +
        '</a>'
    ),
    $('<ul></ul>').append(
      '<a id="/contact/" href="/contact">' +
        '<li><i class="fa fa-address-book"></i>Contact</li>' +
        '</a>'
    ),
    $('<ul></ul>').append(
      '<a id="/license/" href="/license">' +
        '<li><i class="fa fa-file-alt"></i>License</li>' +
        '</a>'
    ),
    $('<ul></ul>').append(
      '<a id="/disclaimer/" href="/disclaimer">' +
        '<li><i class="fa fa-file-contract"></i>Disclaimer</li>' +
        '</a>'
    ),
    $('<ul></ul>').append(
      '<a id="/entertainment/" href="/entertainment">' +
        '<li><i class="fa fa-tv"></i>Entertainment</li>' +
        '</a>'
    ),
    $('<ul></ul>').append(
      '<a id="/sports/" href="/sports">' +
        '<li><i class="fa fa-football-ball"></i>Sports</li>' +
        '</a>'
    ),
    $('<ul></ul>').append(
      '<a id="/gaming/" href="/gaming">' +
        '<li><i class="fa fa-gamepad"></i>Gaming</li>' +
        '</a>'
    ),
    $('<ul></ul>').append(
      '<a id="/money/" href="/money">' +
        '<li><i class="fa fa-chart-line"></i>Money</li>' +
        '</a>'
    )
  )
)

try {
  document.getElementById(window.location.pathname).className = 'active'
} catch(e) {
  console.error(e);
}

let prevScrollpos = window.pageYOffset
window.onscroll = () => {
  const cb = document.querySelector('#checkbox')
  let currentScrollPos = window.pageYOffset

  if (cb.checked || prevScrollpos > currentScrollPos) {
    document.getElementsByClassName('btn')[0].style.top = '0'
  } else {
    document.getElementsByClassName('btn')[0].style.top = '-50px'
  }

  setTimeout(() => {
    prevScrollpos = currentScrollPos
  }, 1000)
}
