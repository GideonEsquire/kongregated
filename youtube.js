if (!YT_USERS) {
  var YT_USERS = [
    'CGPGrey',
    'onemeeeliondollars',
    'MrBeast6000',
    'Kurzgesagt',
    '1veritasium',
    'Vsauce',
    'destinws2',
    'steventhebrave',
    'TheRedNile',
    'jacksepticeye',
    'wheezywaiter',
    // 'stuffmadehere',  <-- I don't know the user name
    // 'mkbhd',  <-- find the user name
    // 'pewidepie',  <-- find the user name
    // 'lastweektonight',  <-- find the user name
    // 'two minute papers',  <-- find the user name
    // 'joshua weissman',  <-- find the user name
    // 'abroad in japan',  <-- find the user name
    // 'wall street journal',  <-- find the user name
    // 'lockpicking lawyer',  <-- find the user name
    // 'electroboom',  <-- find the user name
    // 'diy perks',  <-- find the user name
    // 'handcraft',  <-- find the user name
    // 'jerryrigeverything',  <-- find the user name
    // 'the slomo guys',  <-- find the user name
    // 'practical engineering',  <-- find the user name
    // 'the b1m',  <-- find the user name
    // 'adam savage tested',  <-- find the user name
    // 'binging with babish',  <-- find the user name
    // 'scishow',  <-- find the user name
  ]
}

var x = $('#yt .list-unstyled')

// clear the existing list
$(' #yt .list-unstyled .wrapper').remove()

$.each(YT_USERS, function (index, obj) {
  x.append(
    $('<div class="wrapper"></div>').append(
      $('<li></li>').append(
        '<iframe width="600" height="340" ' +
          'src="https://www.youtube.com/embed?max-results=1&controls=1&' +
          'showinfo=0&rel=0&listType=user_uploads&list=' +
          obj +
          '" frameborder="0" allowfullscreen></iframe>'
      )
    )
  )
})
