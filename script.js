// Function to get the current weather data for London
function getCurrentWeather() {
  const apiKey = '46eccf348decba3ea062a9441ce066e3'; // Replace with your OpenWeatherMap API key

  // API URL for current weather data in London
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

  // Request headers
  const headers = {
    'Content-Type': 'application/json'
  };

  fetch(apiUrl, { headers })
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }
      return response.json();
    })
    .then(function(data) {
      const weatherDescription = data.weather[0].description;
      const weatherDataElement = document.getElementById('weatherData');
      weatherDataElement.innerText = `Current weather in London: ${weatherDescription}`;
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}

// Event listener for button click
document.getElementById('getWeatherBtn').addEventListener('click', getCurrentWeather);

