let q = 'Iligan City'
let APIkey = '3a911854309296acd6a69c008192825b'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${APIkey}&units=imperial`
let footer = document.querySelector('footer')
footer.innerHTML = `<p class="textFooter">Jones Mabala | 🏛 BYU-Idaho | WDD 230</p>`


function website(q){
  let main = document.querySelector('main');
  main.innerHTML = ''
  let card = document.createElement('div')
  let header = document.querySelector('header')
  header.innerHTML = `<h1>OpenWeatherMap.org API Test</h1>`
  card.classList.add('card')
  main.appendChild(card)
  card.innerHTML = `
    <p>The current temperature in ${q} is <span id="current-temp"></span> &deg;F</p>
    <h3>Current Condition Icon</h3>
    <figure>
    <img src="" alt="" id="weather-icon" />
    <figcaption></figcaption>
    </figure>`
  let form = document.createElement('form')
  let input = document.createElement('input')
  let button = document.createElement('button')
  let buttonImg = document.createElement('img')
  let label = document.createElement('label')
  label.htmlFor = 'city'
  input.name = 'city'
  input.id = 'city'
  buttonImg.setAttribute('src', 'images/icon-search.svg')
  buttonImg.setAttribute('alt', 'search button')
  button.appendChild(buttonImg)
  button.id = 'search'
  button.addEventListener('click', () => {
    search(input.value, input)
  })
  input.setAttribute('type', 'text')
  input.placeholder = 'Search'
  label.appendChild(input)
  form.appendChild(label)
  form.appendChild(button)
  header.appendChild(form)

}


async function apiFetch(url) {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      displayResults(data)
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      alert('Try again, something got wrong!');
  }
}

function displayResults(weatherData, q){
  let currentTemp = document.querySelector('#current-temp');
  let weatherIcon = document.querySelector('#weather-icon');
  let captionDesc = document.querySelector('figcaption');
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  let iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  let desc = weatherData.weather[0].description;
  words = desc.split(' ')
  let newDesc = words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', newDesc);
  captionDesc.textContent = newDesc;
}

function search(value, input){
 input.value = ''
 let q = value
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${APIkey}&units=imperial`
 apiFetch(url)
 website(q)
}

website(q)
apiFetch(url)