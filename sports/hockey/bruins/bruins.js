// TODO remove this script and modify 'text.js' to accept a passed in subreddit
const SUBREDDIT = 'bostonbruins'

function correct_url(text) {
  // Remove the slash from the end of the article link to pass to href
  var html = $.trim(text)
  if (html) html = html.replace(/(\/$)/, '')
  return html
}

function reddit_list(news) {
  var l = $('#posts .list-unstyled')
  // clear the existing list
  $('#posts .list-unstyled li').remove()

  $.each(news, function (index, obj) {
    var link = correct_url(obj.url)

    l.append(
      $('<li></li>')
        .append(
          $("<p class = 're'></p>")
            .append(
              "<a class = 'title' target = '_blank' href = " +
                'http://www.' +
                obj.domain +
                '></a>'
            )
            .append(
              "<a target = '_blank' href = " +
                link +
                "><text class = 're-title'>" +
                obj.title +
                "</text><a/>  <a target = '_blank' style = 'color:grey;outline:0' href=http://www." +
                obj.domain +
                '>(' +
                obj.domain +
                ')</a>'
            )
        )
        .append(
          $(
            "<p class='re-under'><a target = '_blank' href = " +
              'http://reddit.com' +
              obj.permalink +
              " style = 'outline:0'><font color='grey'><b>(score: " +
              obj.score +
              ' | comments: ' +
              obj.num_comments +
              ') on reddit.com</b></font></a><p>'
          )
        )
    )
  })
}

var news = []

reddit
  .top(SUBREDDIT)
  .t('day')
  .limit(5)
  .fetch(function (res) {
    // console.log(res);
    for (var i = 0; i < res.data.children.length; i++) {
      // res contains JSON parsed response from Reddit
      news.push(res.data.children[i].data)
    }
    reddit_list(news)
  })
