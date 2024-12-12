import { format, parseISO } from 'date-fns';

export const formatTemperature = (temp) => `${Math.round(temp)}°C`;

export const formatWindSpeed = (speed) => `${speed} m/s`;

export const formatPressure = (pressure) => `${pressure} hPa`;

export const formatHumidity = (humidity) => `${humidity}%`;

export const formatDate = (date) => format(typeof date === 'string' ? parseISO(date) : date, 'EEEE, MMMM do');

export const formatDay = (date) => format(typeof date === 'string' ? parseISO(date) : date, 'EEEE');

export const formatForecastData = (data) => {
  const dailyForecasts = {};
  
  data.list.forEach(item => {
    const date = format(parseISO(item.dt_txt), 'yyyy-MM-dd');
    
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = {
        date: item.dt_txt,
        temp: {
          min: item.main.temp,
          max: item.main.temp
        },
        weather: item.weather[0],
        humidity: item.main.humidity,
        wind: item.wind.speed
      };
    } else {
      dailyForecasts[date].temp.min = Math.min(dailyForecasts[date].temp.min, item.main.temp);
      dailyForecasts[date].temp.max = Math.max(dailyForecasts[date].temp.max, item.main.temp);
    }
  });

  return Object.values(dailyForecasts).slice(0, 5);
};