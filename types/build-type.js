const { GraphQLObjectType, GraphQLInt } = require('graphql');

const BuildType = new GraphQLObjectType({
  name: 'Build',
  description: 'Current Game Build',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: (build) => build.id,
    },
  }),
});

module.exports = BuildType;
