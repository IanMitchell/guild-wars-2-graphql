const { GraphQLObjectType } = require('graphql');
const WorldQuery = require('./world');
const BuildQuery = require('./build');
const CurrencyQuery = require('./currency');

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Your Root Query',
  fields: () => Object.assign({},
    WorldQuery,
    BuildQuery,
    CurrencyQuery
  ),
});

module.exports = Query;
