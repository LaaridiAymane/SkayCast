import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherBackground from './components/WeatherBackground';
import { getWeather } from './services/weatherApi';
import { handleApiError } from './utils/errorHandler';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError('');
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError(handleApiError(err));
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <WeatherBackground weather={weather} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Weather Forecast
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            Enter a city name to get the current weather conditions
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <SearchBar onSearch={handleSearch} />
          
          {loading && (
            <div className="glass-effect rounded-xl p-8 text-center text-white">
              <div className="loader"></div>
              <p className="mt-4">Fetching weather data...</p>
            </div>
          )}
          
          {error && (
            <div className="glass-effect rounded-xl p-6 text-center text-white bg-red-500/20 mb-4">
              {error}
            </div>
          )}
          
          {weather && <WeatherCard weather={weather} />}
        </div>
      </div>
    </div>
  );
}

export default App;