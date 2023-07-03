import { Router } from 'express';
import asyncMiddleware from '../../middleware/async';
import ProductsController from '../../controllers/products';

const router = Router();

router.get('/', asyncMiddleware(ProductsController.getAllProducts));
router.get('/:id', asyncMiddleware(ProductsController.getAProductById));
router.post('/', ProductsController.postAProduct);

export default router;
