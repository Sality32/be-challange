import { glob } from 'glob';
import { Router } from 'express';

const router = Router();
glob.sync(path.join(__dirname, '/../../controllers/**/routes.js')).forEach(async routeFile => {
  const routeModle = await import(routeFile);
  router.use(routeModle.default);
});
export default router;
