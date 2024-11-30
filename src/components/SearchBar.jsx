import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="flex-1 px-6 py-4 rounded-xl text-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-300 text-lg font-semibold backdrop-blur-md"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;