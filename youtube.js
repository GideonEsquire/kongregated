if (!YT_USERS) {
  var YT_USERS = [
    'CGPGrey',
    'MrBeast6000',
    'Kurzgesagt',
    '1veritasium',
    'Vsauce',
    'TheRedNile',
    'jacksepticeye',
    'wheezywaiter',
    'LastWeekTonight',
    'PewDiePie',
    'onemeeeliondollars', // 'mark rober'
    'destinws2', // 'smarter every day'
    'steventhebrave', // 'steve mould'
    'cmbroad44', // 'abroad in japan'
    'keeroyz', // 'two minute papers'
    'marquesbrownlee', // 'mkbhd'
    'scishow', // 'scishow'
    'testedcom', // 'adam savage tested'
    'WSJDigitalNetwork',// 'wall street journal'
    'msadaghd', // 'electroboom'
    'DIYPerks', // 'diy perks'
    'TheB1MLtd', // 'the b1m'
    'JerryRigEverything', // 'jerryrigeverything'
    'theslowmoguys', // 'the slomo guys'
    'gradyhillhouse', // 'practical engineering'

    // 'binging with babish'<-- I don't know the user name
    // 'stuffmadehere',<-- I don't know the user name
    // 'joshua weissman'<-- I don't know the user name
    // 'lockpicking lawyer'<-- I don't know the user name
    // 'handcraft'<-- I don't know the user name
  ]
}

var x = $('#yt .list-unstyled')

// clear the existing list
$(' #yt .list-unstyled .wrapper').remove()

$.each(YT_USERS, function (index, obj) {
  let r = Math.random()
  if (r > 0.5) {
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
  }
})
