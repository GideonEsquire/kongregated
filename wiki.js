// This is still buggy

// Create a new object to interact with the server
var xhr = new XMLHttpRequest()

// I'd like to get a new topic each day
var topic = 'triangle'

var url =
  'https://simple.wikipedia.org/w/api.php' +
  '?action=query' +
  '&prop=extracts' +
  '&origin=*' +
  '&exsentences=4' +
  '&exlimit=1' +
  '&titles=' +
  topic +
  '&explaintext=1' +
  '&format=json'

// Provide 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true)

// Once request has loaded...
xhr.onload = function () {
  let data = JSON.parse(this.response)
  let pages = data.query.pages
  let pid = Object.keys(pages)[0]
  let content = pages[pid].extract

  wiki_topic(content)
}

function wiki_topic(content) {
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
