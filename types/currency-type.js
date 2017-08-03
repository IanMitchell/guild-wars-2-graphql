const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const CurrencyType = new GraphQLObjectType({
  name: 'Currency',
  description: 'Currencies in Account Wallet',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (currency) => currency.id,
    },
    name: {
      type: GraphQLString,
      resolve: (currency) => currency.name,
    },
    description: {
      type: GraphQLString,
      resolve: (currency) => currency.description,
    },
    order: {
      type: GraphQLInt,
      resolve: (currency) => currency.order,
    },
    icon: {
      type: GraphQLString,
      resolve: (currency) => currency.icon,
    },
  }),
});

module.exports = CurrencyType;
