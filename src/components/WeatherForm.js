import React, { useState } from 'react';

const WeatherForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" style={{ marginLeft: '20px' }}>Search</button>
    </form>
  );
};

export default WeatherForm;
