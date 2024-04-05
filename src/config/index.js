import Express from './express'

require('dotenv').config();

// import Express
export const express = Express({
  jwtSecret: process.env.JWT_SECRET,
  jwtSchema: process.env.JWT_SCHEMA,
  env: process.env.NODE_ENV
})

export default {
  // JWT
  jwtSecret: process.env.JWT_SECRET,
  jwtSchema: process.env.JWT_SCHEMA,
  jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  jwtExpiration: `${process.env.JWT_EXPIRATION_MINUTES}m`,
  jwtRefreshTokenExpiration: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION_DAYS}d`,

  // DATABASE
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbSchema: process.env.DB_SCHEMA,
  dbDialect: process.env.DB_DIALECT,

  // ENV
  host: process.env.HOST,
  port: process.env.PORT,
}