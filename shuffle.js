function shuffle() {
  let cards = $('.wrapper')
  Object.keys(cards).forEach(() => {
    let target = Math.floor(Math.random() * cards.length - 1) + 1
    let target2 = Math.floor(Math.random() * cards.length - 1) + 1
    cards.eq(target).before(cards.eq(target2))
  })
}

setTimeout(() => shuffle(), 2000)
