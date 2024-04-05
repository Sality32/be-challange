import AuthService from '../../services/authService'
import { User } from '../../models';
import { Router } from 'express';
import Controller from './controller';
import { validate } from 'express-validation';
import validation from './validation';
import { authenticate } from '../../middleware';

const basePath = '/auth';
const setPath = path => `${basePath}/${path}`;

const routes = Router();
const authService = AuthService(User);
const authController = Controller({ authService });

routes.route(setPath('login')).post( validate(validation.login), authController.login);
routes.route(setPath('refreshToken')).post(authenticate.jwt, validate(validation.refreshToken),  authController.refreshToken);

export default routes;
