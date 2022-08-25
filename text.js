if (!SUBREDDITS) {
  var SUBREDDITS = {
    oddlysatisfying: 4,
    awww: 2,
    worldnews: 5,
    perfecttiming: 2,
    listentothis: 1,
    futurology: 1,
    askscience: 1,
    dataisbeautiful: 3,
    todayilearned: 3,
  }
}

function correct_url(text) {
  // Remove the slash from the end of the article link to pass to href
  var html = $.trim(text)
  if (html) html = html.replace(/(\/$)/, '')
  return html
}

function correct_title(text) {
  // Remove the abbreviations and things
  var txt = $.trim(text)
  if (txt) txt = txt.replace(/\[OC\]/, '')
  if (txt) txt = txt.replace(/TIL/, 'Today I learned')
  return txt
}

function reddit_list(posts) {
  var l = $('#posts .list-unstyled')

  // clear the existing list
  $(' #posts .list-unstyled .wrapper').remove()

  $.each(posts, function (index, obj) {
    var link = correct_url(obj.url)
    var title = correct_title(obj.title)

    l.append(
      $('<div class="wrapper"></div>').append(
        $('<li></li>')
          .append(
            $("<p class = 're'></p>").append(
              "<a target = '_blank' href = " +
                link +
                "><text class = 're-title'>" +
                title +
                '</text><a/>' +
                "<text style = 'color:grey;'> " +
                obj.domain +
                '</text>'
            )
          )
          .append(
            $(
              "<p class='re-under'><a target = '_blank' href = " +
                'http://reddit.com' +
                obj.permalink +
                ' <b class="fa fa-bars"></b></font></a>'
            )
          )
      )
    )
  })
}

var posts = []

const keys = Object.keys(SUBREDDITS)

keys.forEach((key, index) => {
  reddit
    .top(key)
    .t('day')
    .limit(SUBREDDITS[key])
    .fetch((res) => {
      for (var i = 0; i < res.data.children.length; i++) {
        posts.push(res.data.children[i].data)
      }
      reddit_list(posts)
    })
})
