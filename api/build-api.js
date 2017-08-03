const fetch = require('node-fetch');
const { API_ENDPOINT_V2 } = require('./constants');

async function getBuild() {
  const response = await fetch(`${API_ENDPOINT_V2}/build`);
  return response.json();
}

module.exports = {
  getBuild,
};
