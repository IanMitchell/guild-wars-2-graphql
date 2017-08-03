const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const fetch = require('node-fetch');
const { API_ENDPOINT_V1 } = require('../api/constants');
const BuildType = require('../types/build-type');

async function fetchBuild() {
  const response = await fetch(`${API_ENDPOINT_V1}/build`);
  return await response.json()
}

const BuildQuery = {
  build: {
    type: BuildType,
    resolve: fetchBuild
  },
};

module.exports = BuildQuery;
