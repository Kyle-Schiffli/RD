const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const selector = 'div'
nightmare
  .goto('https://www.azlyrics.com/lyrics/killers/mrbrightside39068.html')
  .evaluate(selector => {
    // now we're executing inside the browser scope.
    return document.querySelector(selector).innerText
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })

//   .evaluate(() => document.body.innerHTML
//   'https://www.azlyrics.com/lyrics/killers/mrbrightside39068.html'