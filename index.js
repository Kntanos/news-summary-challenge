const guardianApi_URL = 'https://content.guardianapis.com/search?page=1&api-key=test&show-fields=body,headline,thumbnail'

const healdlines = document.getElementById("headL");

getHeadlines(guardianApi_URL);

function getHeadlines(URL) {
  fetch(URL)
  .then(dataStream => {
    return dataStream.json();
  })
  .then(data => {
    for (let i = 0; i < data.response.results.length; i++) {
      console.log(data.response.results[i].fields.headline);
    }
  })
}


// .then(list => { 
//   list.forEach(element => {
//     allNoteEl.innerHTML +=
//     `<div>${element.noteText}</div><br />`;
//   })