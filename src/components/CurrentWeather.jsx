import React from 'react';
import WeatherDetail from './WeatherDetail';
import { formatTemperature, formatDate, formatWindSpeed, formatHumidity, formatPressure } from '../utils/formatters';

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  const details = [
    { label: 'Feels Like', value: formatTemperature(weather.main.feels_like), icon: '🌡️' },
    { label: 'Humidity', value: formatHumidity(weather.main.humidity), icon: '💧' },
    { label: 'Wind Speed', value: formatWindSpeed(weather.wind.speed), icon: '🌪️' },
    { label: 'Pressure', value: formatPressure(weather.main.pressure), icon: '📊' },
  ];

  return (
    <div className="glass-effect rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{weather.name}</h2>
        <p className="text-xl text-white/80">{formatDate(new Date())}</p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt={weather.weather[0].description}
          className="w-32 h-32 float-animation"
        />
        <div className="text-center md:text-left">
          <div className="text-7xl font-bold mb-2">
            {formatTemperature(weather.main.temp)}
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

export default CurrentWeather;