const { GraphQLObjectType } = require('graphql');
const WorldQuery = require('./world');

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Your Root Query',
  fields: () => Object.assign({}, WorldQuery),
});

module.exports = Query;
