import React from 'react';
import './Weather.css';

const WeatherDisplay = ({ data }) => {
  const { name, main, weather } = data;
  const { temp } = main;
  const { description } = weather[0];

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <p>Temperature: {temp}°C</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default WeatherDisplay;
