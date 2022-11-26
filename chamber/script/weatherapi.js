

// weather API script

/*
In your "weatherapi.js" file, first select all of the HTML elements 
that will need to be modified/manipulated and assign them to let variables 
(These will not change during in the coding of this activity).

*/
let currentTemp = document.querySelector('#temperature');
let weatherIcon = document.querySelector('#weather-icon');


/*
Now create an "url" variable using let that stores the 'https://api.openweathermap.org/...' 
URL as demonstrated in in the API documentation given.
*/

let url = 'https://api.openweathermap.org/data/2.5/weather?q=Iligan&appid=3a911854309296acd6a69c008192825b&units=imperial';

async function apiFetch() {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function displayResults(weatherData) {
    //images
    let iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    let desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    //temperature
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}&#8457;`;
    //weather description
    document.querySelector("#weather-description").textContent = weatherData.weather[0].description
    //wind speed
    let windSpeed = document.querySelector("#windSpeed")
    windSpeed.innerHTML = `${weatherData.wind.speed} mi/hr`
    //windChill
    let windChill = document.querySelector("#windChill")
    windChill.innerHTML = `${computeWindChill(weatherData.main.temp.toFixed(0), weatherData.wind.speed)}`
    //windChill.innerHTML = `${computeWindChill(49, 6)}` //--> this is test wind chill

}

function computeWindChill(temp, speed) {
    if (temp <= 50 && speed > 3) {
        let chill = 35.74 + (0.6215*temp) - (35.75*(speed**.16)) + (.4275*temp*(speed**.16))
        return `${Math.round(chill)} &#8457;`
    } else {
        return `N/A` 
    }
  
}






