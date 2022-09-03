//Create a new object to interact with the server
let xhr = new XMLHttpRequest()

let url =
  /* "https://en.wikipedia.org/w/api.php?action=parse&origin=*&format=json&page=Main_Page" */
  /* "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&page=Main_Page" */
  "https://simple.wikipedia.org/w/api.php?action=query&prop=extracts&origin=*&exsentences=4&exlimit=1&titles=triangle&explaintext=1&format=json"

// Provide 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true)

// Once request has loaded...
xhr.onload = function () {
  // Parse the request into JSON
  let data = JSON.parse(this.response)
  console.log(data.query.pages)
}
// Send request to the server asynchronously
xhr.send()
