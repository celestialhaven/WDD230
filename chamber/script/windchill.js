let temperature = 35
let windSpeed = 33
let windChill = 0
let newTemp = document.getElementById('temperature')
let newWind = document.getElementById('windSpeed')
let newChill = document.getElementById('windChill')
newTemp.innerHTML = `${temperature}&#8457`
newWind.innerHTML = `${windSpeed}mi/h`
newChill.innerHTML = `N/A`

function myWindChill() {
    if (temperature <= 50 && windSpeed > 30) {
        let chill = 35.74 + (0.6215*temperature) - (35.75*(windSpeed**.16)) + (.4275*temperature*(windSpeed**.16))
        windChill = chill
        newChill.innerHTML = `${Math.round(windChill)}&#8457`
    } else {
        newChill.innerHTML = `N/A` 
    }
  
}

myWindChill()