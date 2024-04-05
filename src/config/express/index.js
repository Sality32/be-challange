import express from 'express';
import useragent from 'express-useragent';
import cors from 'cors';
import passport from 'passport';
import passportStrategy from './passportStrategy';
import router from './router';
import { ValidationError } from '../../libs/error/validation';
import { BaseError as SequelizeBaseError } from 'sequelize';
import _ from 'lodash';

export default config => {
  const { jwtSecret, jwtSchema, env } = config;

  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(passport.initialize());
  passport.use('jwt', passportStrategy({ jwtSchema, jwtSecret }));

  app.use(useragent.express());

  app.use('/api/v1', router);

  app.get('/test', (req, res, next) => {
    console.log('test');
    res.json('test');
  })

  app.use((err, req, res, next) => {
    const response = {
      code: err.status || 500,
      message: err.message || 'No message Available',
    };
    
    if (err.statusCode === 400) {
      new ValidationError({ ...err, name: req.url, body: _.omit(req.body, 'items'), user: req.user});
      response.code = err.statusCode;

    } else {
      if (err instanceof SequelizeBaseError) error.details = err?.original?.details ?? err?.sql;
    }

    res.status(response.code);
    res.json(response);
  })
  return app;
}