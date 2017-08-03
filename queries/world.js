const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const fetch = require('node-fetch');
const WorldType = require('../types/world-type');

async function fetchWorlds(ids) {
  const response = await fetch(`https://api.guildwars2.com/v2/worlds?ids=${ids}`);
  return await response.json()
}

async function fetchWorld(id) {
  const results = await fetchWorlds(id);
  return results[0];
}

const WorldQuery = {
  allWorlds: {
    type: new GraphQLList(WorldType),
    resolve: (root, args) => fetchWorlds('all')
  },
  worlds: {
    type: new GraphQLList(WorldType),
    args: {
      ids: { type: GraphQLString },
    },
    resolve: (root, args) => fetchWorlds(args.ids),
  },
  world: {
    type: WorldType,
    args: {
      id: { type: GraphQLInt },
    },
    resolve: (root, args) => fetchWorld(args.id),
  }
};

module.exports = WorldQuery;
