const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const WorldType = new GraphQLObjectType({
  name: 'World',
  description: 'Available worlds or servers',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (world) => world.id,
    },
    name: {
      type: GraphQLString,
      resolve: (world) => world.name,
    },
    population: {
      type: GraphQLString,
      resolve: (world) => world.population,
    },
  }),
});

module.exports = WorldType;
