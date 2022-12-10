let formEl = document.getElementById('searchBarInput');

let keyAPI = '8a63d048dd1e649f180480a62f90d54e';

// DISPLAY WEATHER INFORMATION
function weatherInformation(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyAPI}&units=imperial`)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            var displayWeatherInformationComponents = `
                <div class="card" style"width: 18rem;">
                    <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" class="card-img-top">
                    <div class="displayWeatherInformationCards">
                        <h5 class="cardTitle">${cityName}</h5>
                        <p class="cardText">Tempreture:${res.main.temp}<span>${res.weather[0].description}</span></p>
                        <p class="cardText">Humidity:${res.main.humidity}</p>
                        <p class="cardText">Wind Speed:${res.wind.speed}</p>
                    </div>
                </div>
            `
            document.getElementById('weatherInformation').innerHTML = displayWeatherInformationComponents;
        });
};

// DISPLAY WEATHER FORECAST
function weatherForecast(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyAPI}&units=imperial`)
        .then(response => response.json())
        .then(res => {
            console.log(res);
            let weatherData = res.list
            var displayWeatherForecastComponents = ''
            for (let i = 0; i < weatherData.length; i = i + 8) {
                displayWeatherForecastComponents += `
                <div class="card" style="width: 18rem;">
                    <img src="https://openweathermap.org/img/wn/${weatherData[i].weather[0].icon}@2x.png>
                    <div class="displayWeatherForecastCards">
                        <h5 class="cardTitle">${cityName}</h5>
                        <p class="cardText">emperature:${weatherData[i].main.temp} <span>${weatherData[i].weather[0].description}</span></p>
                        <p class="cardText">Humidity:${weatherData[i].main.humidity}</p>
                        <p class="cardText">Wind Speed:${weatherData[i].wind.speed}</p>
                    </div>
                </div>
                `

                document.getElementById('weatherForecast').innerHTML = displayWeatherForecastComponents;
            };
        });
};