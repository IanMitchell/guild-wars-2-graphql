const fetch = require('node-fetch');
const { API_ENDPOINT_V2 } = require('./constants');

async function getCurrency(id) {
  const response = await fetch(`${API_ENDPOINT_V2}/currencies/${id}`);
  return response.json();
}

async function getAllCurrencies() {
  const response = await fetch(`${API_ENDPOINT_V2}/currencies`);
  const results = await response.json();
  return Promise.all(results.map(getCurrency));
}

module.exports = {
  getAllCurrencies,
  getCurrency,
};
