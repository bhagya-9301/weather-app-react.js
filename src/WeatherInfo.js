import React, { useState } from "react";
import './WeatherInfo.css';
import axios from 'axios';

import logo from '../src/cloud.jpg';
import search from '../src/search.jpg';

const WeatherInfo = () =>{
    const [placeName, setPlaceName] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
  
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=5059ec0c52c05935b1250eda683ddeb7`);
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setWeatherData(null);
        setError('Error fetching weather data');
      }
    };
  
return(
<div className='container'>
      <div>
        <img src={logo} alt="img" className="cloud" />
      <h2>Weather Information</h2>
      <hr/>
        <div className="search">
          <input
            type='text'
            placeholder="Enter Place Name..."
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
            className="search-input"
          />
        </div>
        <button onClick={fetchWeatherData} className="search-button"> <img src={search} alt="logo" className="search-logo" /></button>
      </div>
      <hr/>
      {error && <p>{error}</p>}
      {weatherData && (
        <div className="main">
          <p className="p">Temperature: {weatherData.main.temp - 273.15}°C</p>
          <p className="p">Description: {weatherData.weather[0].description}</p>
          <p className="p">Humidity: {weatherData.main.humidity}%</p>
          <p className="p">Wind Speed: {weatherData.wind.speed}m/s</p>
        </div>
      )}
      </div>
)
}
 export default WeatherInfo;