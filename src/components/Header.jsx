import { useState } from 'react';
import axios from 'axios';

function Header() {
    const [city, setcity] = useState("")
    const [weather, setweather] =useState("")
    const [temp, settemp] = useState("")
    const [descr, setdescr] = useState("")
  function CityName(evt){
   setcity(evt.target.value)
  } 
  function getWeather() {
    const wheatherdata = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0efe0b956e513b1217ad609add553e0e&units=metric`)
      wheatherdata.then(function (response) {
        console.log(response.data);
        setweather(response.data.weather[0].main);
        settemp(response.data.main.temp);
        setdescr(response.data.weather[0].description);
      })
      .catch(function (error) {
        console.error("There was an error fetching the weather data!", error);
      });
  }

    return (
        <div className='header-container'>

            <h1 className='header'>
                weather Report
            </h1>
            <p className='header-p'>
                Get the latest weather updates for your location.
            </p>
            <input className='inputbox' type="text" onChange={CityName} placeholder='Enter your current city' />
            <br />
            <br />
            <button className='btn glow-on-hover' onClick={getWeather}>Get Report</button>
<div className='report'>
           <h4>☁️ Weather: {weather}</h4>
            <h4>🔆  Temperature: {temp}</h4>
            <h4>🍂 Description: {descr}</h4>
            </div>
        </div>
    );

}
export default Header