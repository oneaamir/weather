
  
  

let action=()=>{
      let name;
      let city = document.querySelector(".search input").value;
      let UR = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dd246e5ec461c7e7727913d1a79db853`;

       fetch(UR)
.then((res) => {
    return res.json();  // return the promise here
}).then((val) => {
    console.log(val);  
    
    document.querySelector(".city").innerText=val.name;
    document.querySelector(".temp").innerText=Math.round(val.main.temp- 273)+"°C";
    document.querySelector(".humidity").innerText=val.main.humidity+"%";
    document.querySelector(".wind").innerText=val.wind.speed+"kmph";
    name=val.weather[0].main;
    console.log(name);
    if(name=="Rain"){
      document.querySelector(".weather .weather-icon").src="rainly.png";
    }
    else if(name=="Mist"){
      document.querySelector(".weather .weather-icon").src="mist.png";
    }
    else if(name=="Sunny"){
      document.querySelector(".weather .weather-icon").src="sunny.png";
    }
    else if(name=="Clouds"){
      document.querySelector(".weather .weather-icon").src="cloudy.png";
    }
    else  {
      document.querySelector(".weather .weather-icon").src="happy.png";
    }
    document.querySelector(".weather").style.display="block";
    
     
    
}).catch((error) => {
    console.log('Error:', error);  // handle any error that might occur
});

}
document.querySelector("button").addEventListener("click",action)