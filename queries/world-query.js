const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const { WorldAPI } = require('../api');
const WorldType = require('../types/world-type');

const WorldQuery = {
  allWorlds: {
    type: new GraphQLList(WorldType),
    resolve: () => WorldAPI.getWorlds('all'),
  },
  worlds: {
    type: new GraphQLList(WorldType),
    args: {
      ids: { type: GraphQLString },
    },
    resolve: (root, args) => WorldAPI.getWorlds(args.ids),
  },
  world: {
    type: WorldType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve: (root, args) => WorldAPI.getWorld(args.id),
  },
};

module.exports = WorldQuery;
