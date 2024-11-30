import React from 'react';

const WeatherBackground = ({ weather }) => {
  const getBackgroundClass = () => {
    if (!weather) return 'bg-gradient-to-br from-blue-400 to-blue-600';
    
    const condition = weather.weather[0].main.toLowerCase();
    
    const backgrounds = {
      clear: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      clouds: 'bg-gradient-to-br from-gray-400 to-gray-600',
      rain: 'bg-gradient-to-br from-blue-600 to-blue-800',
      snow: 'bg-gradient-to-br from-blue-100 to-blue-300',
      thunderstorm: 'bg-gradient-to-br from-gray-700 to-gray-900',
      drizzle: 'bg-gradient-to-br from-blue-400 to-blue-600',
      mist: 'bg-gradient-to-br from-gray-300 to-gray-500',
    };

    return backgrounds[condition] || backgrounds.clear;
  };

  return (
    <div 
      className={`fixed inset-0 transition-colors duration-1000 ${getBackgroundClass()}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default WeatherBackground;