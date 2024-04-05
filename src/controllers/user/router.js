import { Router } from 'express';
import UserService from '../../services/userService'
import { User } from '../../models';
import { authenticate } from '../../middleware';
import Controller from './controller';
import { validate } from 'express-validation';
import validation from './validation';

const routes = Router();
const basePath = '/users';
const setPath = path => `${basePath}/${path}`;

const userService = UserService(User);
const userController = Controller({ userService });

routes.route(basePath)
  .get(authenticate.jwt, userController.getUsers)
  .post(authenticate.jwt, validate(validation.create), userController.create);
routes.route(setPath(':id/get')).get(authenticate.jwt, validate(validation.getUser), userController.getUser );
routes.route(setPath(':id/patch')).patch(authenticate.jwt, validate(validation.update), userController.update);
routes.route(setPath(':id/delete')).delete(authenticate.jwt, validate(validation.deleteUser), userController.deleteUser);

export default routes;
