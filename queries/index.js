const { GraphQLObjectType } = require('graphql');
const WorldQuery = require('./world-query');
const BuildQuery = require('./build-query');
const CurrencyQuery = require('./currency-query');

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Your Root Query',
  fields: () => Object.assign({},
    WorldQuery,
    BuildQuery,
    CurrencyQuery,
  ),
});

module.exports = Query;
