import { Router } from 'express';
import productRoute from './products.route';
import profilesRoute from './profiles.route';
import userRoute from './users.route';

const routes = Router();

routes.use('/products', productRoute);
routes.use('/profiles.js', profilesRoute);
routes.use('/userAuth', userRoute);

export default routes;
