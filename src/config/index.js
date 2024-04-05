import Express from 'express'

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
  jwtSpecialTokenSecret: process.env.JWT_SPECIAL_TOKEN_SECRET,
  jwtExpiration: `${process.env.JWT_EXPIRATION_MINUTES}m`,
  jwtRefreshTokenExpiration: `${process.env.JWT_REFRESH_TOKEN_EXPIRATION_DAYS}d`,
  jwtSpecialTokenExpiration: `${process.env.JWT_SPECIAL_TOKEN_EXPIRATION_MINUTES}m`,
}