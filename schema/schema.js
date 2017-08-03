const { GraphQLSchema } = require('graphql');
const Query = require('./../queries');

const Schema = new GraphQLSchema({
  query: Query,
});

module.exports = Schema;
