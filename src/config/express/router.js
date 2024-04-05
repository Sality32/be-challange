import { glob } from 'glob';
import { Router } from 'express';
import path from 'path';

const router = Router();
glob.sync(path.join(__dirname, '/../../controllers/**/router.js')).forEach(async routeFile => {
  const routeModle = await import(routeFile);
  router.use(routeModle.default);
});
export default router;
