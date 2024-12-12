import React from 'react';
import ForecastCard from './ForecastCard';

const ForecastSection = ({ forecasts }) => {
  if (!forecasts?.length) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">5-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecasts.map((forecast, index) => (
          <ForecastCard key={index} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;