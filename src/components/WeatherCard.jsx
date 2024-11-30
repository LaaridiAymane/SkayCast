import React from 'react';
import { format } from 'date-fns';
import WeatherDetail from './WeatherDetail';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const details = [
    { label: 'Feels Like', value: `${Math.round(weather.main.feels_like)}°C`, icon: '🌡️' },
    { label: 'Humidity', value: `${weather.main.humidity}%`, icon: '💧' },
    { label: 'Wind Speed', value: `${weather.wind.speed} m/s`, icon: '🌪️' },
    { label: 'Pressure', value: `${weather.main.pressure} hPa`, icon: '📊' },
  ];

  return (
    <div className="glass-effect rounded-2xl p-8 text-white transition-all duration-300 hover:shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{weather.name}</h2>
        <p className="text-xl text-white/80">{format(new Date(), 'EEEE, MMMM do')}</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt={weather.weather[0].description}
          className="w-32 h-32 float-animation"
        />
        <div className="text-center md:text-left">
          <div className="text-7xl font-bold mb-2">
            {Math.round(weather.main.temp)}°C
          </div>
          <p className="text-2xl text-white/80 capitalize">
            {weather.weather[0].description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {details.map((detail) => (
          <WeatherDetail
            key={detail.label}
            {...detail}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;