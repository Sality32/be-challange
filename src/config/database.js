import config from '.';

const { dbUser, dbPassword, dbName, dbDialect, dbSchema, dbHost, dbPort } = config;

module.exports = {
  host: dbHost,
  port: dbPort,
  username: dbUser,
  password: dbPassword,
  database: dbName,
  schema: dbSchema,
  dialect: dbDialect
};
