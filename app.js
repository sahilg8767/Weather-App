const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById('btn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity= document.getElementById('humidity');
const wind_speed= document.getElementById('wind-speed');

const location_not_found= document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

//function to check weather
async function checkWeather(city)
{
    const api_key= "75004e55d9bd2143468ffd564b534353";
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weather_data = await fetch(`${url}`).then(response => response.json());


    // const weather_body = document.querySelector('weather-body');

    //console.log(weather_data);

    if(weather_data.cod === `404`)
    {
        location_not_found.style.display ="flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
     location_not_found.style.display ="none";
     weather_body.style.display = "flex";

    temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}% `;
    wind_speed.innerHTML= `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main)
    {
        case 'Clouds':
            weather_img.src="/images/cloud.png";
            break;
         case 'Clear':
            weather_img.src="/images/clear.png";
            break;
         case 'Rain':
            weather_img.src="/images/rain.png";
            break;
         case 'Mist':
            weather_img.src="/images/mist.png";
            break;
         case 'Snow':
            weather_img.src="/images/snow.png";
            break;
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
// function search(){ //function to implement event listener when search button is clicked
    
// }

