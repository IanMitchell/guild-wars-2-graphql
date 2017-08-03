const { GraphQLSchema } = require('graphql');
const Query = require('./../queries/query.js');

const Schema = new GraphQLSchema({
  query: Query,
});

module.exports = Schema;
