const { BuildAPI } = require('../api');
const BuildType = require('../types/build-type');

const BuildQuery = {
  build: {
    type: BuildType,
    resolve: BuildAPI.getBuild,
  },
};

module.exports = BuildQuery;
