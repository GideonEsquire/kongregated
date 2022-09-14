// Create a new object to interact with the server
var xhr = new XMLHttpRequest()

var url = 'https://www.merriam-webster.com/word-of-the-day'

// Provide 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true)

// Once request has loaded...
xhr.onload = function() {
  let data = JSON.parse(this.response)
  console.log(data)

  make_dom(data)
}

function make_dom(content) {
  let l = $('#posts .list-unstyled')
  let link = 'https://simple.wikipedia.org/wiki/' + topic
  let domain = 'wikipedia.org'

  l.append(
    $('<div class="wrapper"></div>').append(
      $('<li></li>').append(
        $("<p class = 're'></p>").append(
          "<a target = '_blank' href = " +
          link +
          "><text class = 're-title'>" +
          "Today's topic: " +
          topic + ' - ' +
          content +
          '</text><a/>' +
          "<text style = 'color:grey;'> " +
          domain +
          '</text>'
        )
      )
    )
  )
}

xhr.send()
