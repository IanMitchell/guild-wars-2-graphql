const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const fetch = require('node-fetch');
const { API_ENDPOINT_V2 } = require('../api/constants');
const CurrencyType = require('../types/currency-type');

async function fetchCurrencies() {
  const response = await fetch(`${API_ENDPOINT_V2}/currencies`);
  const results = await response.json()
  return await Promise.all(results.map(id => fetchCurrency(id)))
}

async function fetchCurrency(id) {
  const response = await fetch(`${API_ENDPOINT_V2}/currencies/${id}`);
  return await response.json()
}

const WorldQuery = {
  allCurrencies: {
    type: new GraphQLList(CurrencyType),
    resolve: fetchCurrencies,
  },
  currency: {
    type: CurrencyType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve: (root, args) => fetchCurrency(args.id),
  }
};

module.exports = WorldQuery;
