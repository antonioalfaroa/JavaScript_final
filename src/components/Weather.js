import React, { useState } from 'react';
import './Weather.css';
import WeatherForm from './WeatherForm'; 
import WeatherDisplay from './WeatherDisplay'; 

const Weather = ({ closeApp }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e124392ad4ccb3d155131aba17947495&units=metric`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    }
  };
  

  return (
    <div className="weather">
      <h1>Weather App</h1>
      <WeatherForm onSubmit={fetchWeatherData} />
      {weatherData && <WeatherDisplay data={weatherData} />}
      {error && <p className="error">{error}</p>}
      <button onClick={closeApp} style={{ marginTop: '20px' }}>Close</button>
    </div>
  );
};

export default Weather;
