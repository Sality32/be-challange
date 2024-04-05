import { Router } from 'express';

const routes = Router();

routes.route('/1').get((req, res, next)=> { res.send('test')});

export default routes;
