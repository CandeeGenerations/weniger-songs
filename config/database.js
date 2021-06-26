module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'songs.3j5rc.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'songs'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', '4U8WLYux2f7WLzxw'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
