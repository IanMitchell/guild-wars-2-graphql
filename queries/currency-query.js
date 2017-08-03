const { GraphQLList, GraphQLInt } = require('graphql');
const { CurrencyAPI } = require('../api');
const CurrencyType = require('../types/currency-type');

const WorldQuery = {
  allCurrencies: {
    type: new GraphQLList(CurrencyType),
    resolve: CurrencyAPI.getAllCurrencies,
  },
  currency: {
    type: CurrencyType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve: (root, args) => CurrencyAPI.getCurrency(args.id),
  },
};

module.exports = WorldQuery;
