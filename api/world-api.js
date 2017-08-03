const fetch = require('node-fetch');
const { API_ENDPOINT_V2 } = require('./constants');

async function getWorlds(ids) {
  const response = await fetch(`${API_ENDPOINT_V2}/worlds?ids=${ids}`);
  return response.json();
}

async function getWorld(id) {
  const results = await getWorlds(id);
  return results[0];
}

module.exports = {
  getWorlds,
  getWorld,
};
