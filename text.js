if (!SUBREDDITS) {
  var SUBREDDITS = [
    'oddlysatisfying',
    'awww',
    'worldnews',
    'perfecttiming',
    'listentothis',
    'futurology',
    'askscience',
    'dataisbeautiful',
    'todayilearned',
  ]
}

function correct_url(text) {
  // Remove the slash from the end of the article link to pass to href
  var html = $.trim(text)
  if (html) html = html.replace(/(\/$)/, '')
  return html
}

function reddit_list(news) {
  var l = $('#posts .list-unstyled')

  // clear the existing list
  $(' #posts .list-unstyled .wrapper').remove()

  $.each(news, function (index, obj) {
    var link = correct_url(obj.url)

    l.append(
      $('<div class="wrapper"></div>').append(
        $('<li></li>')
          .append(
            $("<p class = 're'></p>")
              .append(
                "<a target = '_blank' href = " +
                  link +
                  "><text class = 're-title'>" +
                  obj.title +
                  "</text><a/>" +
                  "<text style = 'color:grey;'> " +
                  obj.domain +
                  "</text>"
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

var news = []

for (let index = 0; index < SUBREDDITS.length; index++) {
  reddit
    .top(SUBREDDITS[index])
    .t('day')
    .limit(5)
    .fetch(function (res) {
      for (var i = 0; i < res.data.children.length; i++) {
        news.push(res.data.children[i].data)
      }
      reddit_list(news)
    })
}
