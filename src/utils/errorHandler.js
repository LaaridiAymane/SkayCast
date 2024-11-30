export const handleApiError = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 404:
        return 'City not found. Please check the spelling and try again.';
      case 401:
        return 'Invalid API key. Please check your configuration.';
      default:
        return 'An error occurred while fetching weather data.';
    }
  }
  return 'Unable to connect to weather service. Please check your internet connection.';
};