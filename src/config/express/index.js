import express from 'express';
import useragent from 'express'
import cors from 'cors';
import passport from 'passport';
import passportStrategy from './passportStrategy';
import router from './routes';

export default config => {
  const { jwtSecret, jwtSchema, env } = config;

  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(passport.initialize());
  passport.use('jwt', passportStrategy({ jwtSchema, jwtSecret }));

  app.use('/api/v1', router);

  return app;
}