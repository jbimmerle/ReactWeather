var Axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=cc8a6a0aba239e9d5b5329e8349b438c&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return Axios.get(requestURL).then(function (res) {
        if (res.data.cod && res.data.message) {
          throw new Error('Unable to fetch weather for that location.');
        } else {
          return res.data.main.temp;
        }
      }, function (res) {
        throw new Error('Unable to fetch weather for that location.');
      });
  }
}
