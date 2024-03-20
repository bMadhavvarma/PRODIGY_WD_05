const apiKey = "add9731ade83ef475e7ff25d752d8e0c";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(name) {
  const response = await fetch(`${apiUrl}${name}&appid=${apiKey}`);
  const data = await response.json();
  document.querySelector(".name").innerHTML = data.name;
  document.querySelector(".country").innerHTML= data.sys.country;
  document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity-text").innerHTML = "Humidity: " + data.main.humidity + "%";
  document.querySelector(".pressure-text").innerHTML = "Pressure:"+data.main.pressure;
  document.querySelector(".wind-text").innerHTML = "Wind: " + data.wind.speed + "km/h";
  document.querySelector(".wheather-type").innerHTML= data.weather[0].description;
  const weatherIcon = document.querySelector(".wheather-icon");
  const iconCode = data.weather[0].icon;
  if (weatherIcons.hasOwnProperty(iconCode)) {
    weatherIcon.src = weatherIcons[iconCode];
  } else {
    weatherIcon.src = "./images/sun.png"; 
  }
}

const weatherIcons={
  "01d": "./images/sun.png",
  "01n": "./images/moon.png",
  "02d": "./images/few-clouds.png",
  "02n": "./images/night-fewclouds.png",
  "03d": "./images/scattered-clouds.png",
  "03n": "./images/scattered-clouds.png",
  "04d": "./images/broken-clouds.png",
  "04n": "./images/broken-clouds.png",
  "09d": "./images/shower-rain.png",
  "09n": "./images/shower-rain.png",
  "10d": "./images/s-rain.png",
  "10n": "./images/n-rain-night.png",
  "11d": "./images/thunder.png",
  "11n": "./images/thunder.png",
  "13d": "./images/snowflake.png",
  "13n": "./images/snowflake.png",
  "50d": "./images/mist.png",
  "50n": "./images/mist.png"
}
searchBtn.addEventListener("click", () => {
  const cityName = searchBox.value.trim();
  if (cityName !== "") {
    checkWeather(cityName);
  } else {
    alert("Please enter a city name.");
  }
});
