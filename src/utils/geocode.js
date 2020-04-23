const axios = require('axios');

const getCoordenates = (city, callback) => {
    const mapBoxToken =
      "pk.eyJ1IjoiY3ViaWxsb3NhIiwiYSI6ImNrOTlhNWlncTB5a24zZ3RhMjYwMng0M2EifQ.AJRtLFSJBh-VheZDZh8ElA";
    const mapBoxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapBoxToken}`;
  
    axios
      .get(mapBoxURL)
      .then((response) => {
        if (response.data.features.length === 0) {
          callback("Unable to find location. Try another search", undefined);
        } else {
          callback(undefined, {
            longitude: response.data.features[0].center[0],
            latitude: response.data.features[0].center[1],
            location: response.data.features[0].place_name,
          });
        }
      })
      .catch((error) => {
        callback("unable to connect to location services", undefined);
      });
  };

  module.exports = getCoordenates;