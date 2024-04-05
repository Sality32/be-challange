import Joi from 'joi';

export default {
  getUser: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
  create: {
    body: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },
  update: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().keys({
      username: Joi.string(),
      password: Joi.string(),
    }),
  },
  deleteUser: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
}