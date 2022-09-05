if (!SUBREDDITS) {
  var SUBREDDITS = {
    askscience: 1,
    awww: 2,
    books: 1,
    dataisbeautiful: 3,
    explainlikeimfive: 1,
    futurology: 1,
    games: 1,
    listentothis: 1,
    oddlysatisfying: 4,
    perfecttiming: 2,
    showerthoughts: 1,
    technology: 1,
    todayilearned: 3,
    worldnews: 5,
    youshouldknow: 2,
    truefilm: 1,
  }
}

function correct_url(text) {
  // Remove the slash from the end of the article link to pass to href
  let html = $.trim(text)
  if (html) html = html.replace(/(\/$)/, '')
  return html
}

function correct_title(text) {
  // Remove the abbreviations and things
  let txt = $.trim(text)
  if (txt) txt = txt.replace(/\[OC\]/i, '')
  if (txt) txt = txt.replace(/^til:?/i, 'Today I learned')
  if (txt) txt = txt.replace(/^eli5/i, "Explain like I'm 5")
  if (txt) txt = txt.replace(/^ysk:?\s?/i, '')
  return txt
}

function correct_domain(text) {
  // Remove the abbreviations and things
  let dmn = $.trim(text)
  if (dmn) dmn = dmn.replace(/^self\./i, '')
  if (dmn) dmn = dmn.replace(/^v?i?\./i, '')
  return dmn
}

function reddit_list(posts) {
  let l = $('#posts .list-unstyled')

  // clear the existing list
  $(' #posts .list-unstyled .wrapper').remove()

  $.each(posts, function (index, obj) {
    const link = correct_url(obj.url)
    const title = correct_title(obj.title)
    const domain = correct_domain(obj.domain)

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
                domain +
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

keys.forEach((key, _index) => {
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
