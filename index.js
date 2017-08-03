const graphqlHTTP = require('express-graphql');
const Schema = require('./schema/schema.js');

module.exports = graphqlHTTP({ schema: Schema, pretty: true, graphiql: true });
