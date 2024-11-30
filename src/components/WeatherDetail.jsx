import React from 'react';

const WeatherDetail = ({ label, value, icon }) => {
  return (
    <div className="glass-effect rounded-xl p-4 text-center transition-transform hover:scale-105">
      <span className="text-2xl mb-2 block">{icon}</span>
      <p className="text-sm text-white/80 mb-1">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
};

export default WeatherDetail;