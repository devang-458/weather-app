const apiKey = "593d7b968b30700de070e708c2d06c09";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const serachBox = document.querySelector(".search input")
const serachBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function cheakWeather(city){
    const response =  await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weahter").style.display = "none"
    }else{
        let data = await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    } 
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    } 
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/Drizzle.png"
    } 
    else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "images/Humidity.png"
    } 
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/Mist.png"
    } 
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/Rain.png"
    } 
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/Snow.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
    }
}

serachBtn.addEventListener("click",()=>{
cheakWeather(serachBox.value)})
