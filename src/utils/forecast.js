const axios = require("axios");

const forecast = (latitude, longitude,  callback) => {
  const api = "http://api.openweathermap.org/data/2.5/weather?";
  const secretKey = "5de76bcc9b5d256a662c6bd755e42588";
  const url =
    api + "lat=" + latitude + "&lon=" + longitude + "&appid=" + secretKey;
 //console.log(url);
  axios
    .get(url)
    .then((response) => {
     //   console.log(response)
      callback(undefined, {
        location: response.data.name,
        weather: response.data.weather[0].description,
      });
    })
    .catch((error) => {
    
      if (error.response.status === 400) {
        callback("Unable to find location. Try another search", undefined);
      } else {
        callback("unable to connect to location services", undefined);
      }
    });
};

module.exports = forecast;
