import './style.css'


const apiKey = "bf213bb283ca405fbf514213241812";
const apiUrl = "http://api.weatherapi.com/v1/current.json?";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weathericon");

async function checkWeather(city){
  const response = await fetch (apiUrl + `key=${apiKey}`+ `&q=${city}`)
 // const response = await fetch (apiUrl)


  if(response.status == 400){
    console.log(response.status)
    document.querySelector(".error").style.display ="block";
    document.querySelector(".weather").style.display ="none";
  }else{
  
    let data = await response.json();
   // console.log(data);
  document.querySelector(".city").innerHTML = data.location.name;
  
  document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c)+ "°C";
  document.querySelector(".humidity").innerHTML = data.current.humidity +"%";
  document.querySelector(".wind").innerHTML = data.current.wind_kph+ "km/h";
  document.querySelector(".weather-icon").src =data.current.condition.icon;
  //update the weather image 
  /*
  if(data.weather[0].main == "clouds"){
    weatherIcon.src = "public/clouds.png";

  }else if(data.weather[0].main == "rain"){
    weatherIcon.src = "public/rain.png";

  }else if(data.weather[0].main == "clear"){
    weatherIcon.src = "public/clear.png";

  }else if(data.weather[0].main == "drizzle"){
    weatherIcon.src = "public/drizzle.png";
  }
  */
 
  document.querySelector(".weather").style.display = "block";
  
 document.querySelector(".error").style.disply ="none";

  }

  
}
  
searchbtn.addEventListener("click", ()=> {
  checkWeather(searchbox.value);

})


