let weatherIcon = document.querySelector('#weather-icon');

const API_KEY = '3a911854309296acd6a69c008192825b'

getWeatherData()
function getWeatherData () { fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=36.778259&lon=-119.417931&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
            
        console.log(data)
        let arr = [0, 8, 16, 24]
        arr.forEach(idx => {
            showWeatherData(data.list[idx])
        })
    })}


function showWeatherData (data) {

    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    let {temp, humidity} = data.main
    let {description, icon} = data.weather[0]
    let date = data.dt_txt
    let result = date.slice(0, 10)

    let test = document.getElementById('date-cont');

    let copy = test.cloneNode(true)

    copy.querySelector("#temp").innerHTML = `Temperature: ${temp}&#8451`
    copy.querySelector("#desc").innerHTML = `Description: ${description}`
    copy.querySelector("#humid").innerHTML = `Humidity: ${humidity}`
    copy.querySelector("#weather-icon").innerHTML = icon
    copy.querySelector("#forecast-day").innerHTML = result

    copy.style.display = "block";
   
    document.getElementById('test-cont').append(copy)

    
}