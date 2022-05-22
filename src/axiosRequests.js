const axios = require('axios');

async function getLaunches() {
  try {
    return await axios.get("https://api.spacexdata.com/v3/launches");
  } catch (err) {
    throw err;
  }
}

async function getRockets() {
  try {
    return await axios.get("https://api.spacexdata.com/v3/rockets");
  } catch (err) {
    throw err;
  }
}

module.exports = { getLaunches, getRockets };
