import React from 'react';
import { formatTemperature, formatDay } from '../utils/formatters';

const ForecastCard = ({ forecast }) => {
  return (
    <div className="glass-effect rounded-xl p-4 text-center transition-transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2">
        {formatDay(forecast.date)}
      </h3>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather.icon}@2x.png`}
        alt={forecast.weather.description}
        className="w-16 h-16 mx-auto"
      />
      <div className="mt-2">
        <p className="text-sm">
          <span className="font-semibold">{formatTemperature(forecast.temp.max)}</span>
          {' / '}
          <span className="text-white/80">{formatTemperature(forecast.temp.min)}</span>
        </p>
        <p className="text-sm text-white/80 capitalize mt-1">
          {forecast.weather.description}
        </p>
      </div>
    </div>
  );
};

export default ForecastCard;