module.exports = {
  query: `
    songsCount(where: JSON): Int!
  `,
  resolver: {
    Query: {
      songsCount: {
        description: 'Return the count of songs',
        resolverOf: 'application::song.song.count',
        resolver: async (obj, options, ctx) => {
          return await strapi.api.song.services.song.count(options.where || {})
        },
      },
    },
  },
}
