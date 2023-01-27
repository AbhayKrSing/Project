const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '79b76dcc93msh9fa35a8f5a37f02p196bacjsn393c68ce08f4',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};
document.getElementsByClassName('progress-bar')[0].style.width = '10%'
let run = async () => {
  document.getElementsByClassName('progress-bar')[0].style.setProperty('width', '25%')
  let response = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=movie', options)
  document.getElementsByClassName('progress-bar')[0].style.setProperty('width', '50%')
  let data = await response.json()
  document.getElementsByClassName('progress-bar')[0].style.setProperty('width', '100%')
  article = data['d']
  document.getElementsByClassName('row')[0].innerHTML = ``
  article.forEach((element) => {
    document.getElementsByClassName('row')[0].innerHTML += `<div class="card m-3 col-3" id='1' >
    <img src=${element.i.imageUrl ? element.i.imageUrl : 'https://m.media-amazon.com/images/I/314t8YNB69L.png'} class="card-img-top" alt="...">
    <div class="card-body bg-dark text-white">
        <h5 class="card-title">${element.l}</h5>
        <p class="card-text">${element.s}</p>
        <a href="#" class="btn btn-primary">Read More</a>
    </div>`
  })
  document.getElementsByClassName('vh-100')[0].setAttribute('class', 'd-none')
  document.getElementById('1').setAttribute('class', 'container text-center')
  document.getElementsByClassName('progress')[0].setAttribute('class', 'd-none')
}
run()


