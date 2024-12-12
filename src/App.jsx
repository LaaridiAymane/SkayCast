import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import ForecastSection from './components/ForecastSection';
import WeatherBackground from './components/WeatherBackground';
import { getWeather, getForecast } from './services/weatherApi';
import { handleApiError } from './utils/errorHandler';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      setError('');
      const [currentWeather, forecastData] = await Promise.all([
        getWeather(city),
        getForecast(city)
      ]);
      setWeather(currentWeather);
      setForecast(forecastData);
    } catch (err) {
      setError(handleApiError(err));
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <WeatherBackground weather={weather} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Weather Forecast
          </h1>
          <p className="text-white/80 text-lg md:text-xl">
            Enter a city name to get the current weather and 5-day forecast
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
          
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
        
        {weather && (
          <div className="space-y-8">
            <CurrentWeather weather={weather} />
            <ForecastSection forecasts={forecast} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;