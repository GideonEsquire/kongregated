$('#sidebar').append('<input type="checkbox" id="checkbox" />')

$('#sidebar').append(
  '<label class="btn" for="checkbox">' +
    '<i class="fa fa-bars"></i>' +
    '<span>Menu</span>' +
  '</label>'
)

$('#sidebar').append(
  '<div class="sidebar">' +
    '<ul>' +
      '<a href="/" class="active">' +
        '<li><i class="fa fa-home"></i>Home</li>' +
      '</a>' +
      '<a href="/about">' +
        '<li><i class="fa fa-address-card"></i>About</li>' +
      '</a>' +
      '<a href="/contact">' +
        '<li><i class="fa fa-address-book"></i>Contact</li>' +
      '</a>' +
      '<a href="/license">' +
        '<li><i class="fa fa-file-alt"></i>License</li>' +
      '</a>' +
      '<a href="/disclaimer">' +
        '<li><i class="fa fa-file-contract"></i>Disclaimer</li>' +
      '</a>' +
      '<a href="/entertainment">' +
        '<li><i class="fa fa-tv"></i>Entertainment</li>' +
      '</a>' +
      '<a href="/sports">' +
        '<li><i class="fa fa-football-ball"></i>Sports</li>' +
      '</a>' +
      '<a href="/gaming">' +
        '<li><i class="fa fa-gamepad"></i>Gaming</li>' +
      '</a>' +
      '<a href="/money">' +
        '<li><i class="fa fa-chart-line"></i>Money</li>' +
      '</a>' +
    '</ul>' +
  '</div>'
)
