import { Router } from 'express';
import asyncMiddleware from '../../middleware/async';
import validate from "../../middleware/validate";
import UsersController from '../../controllers/users';

const router = Router();

router.post('/register',validate.authRegister, asyncMiddleware(UsersController.registerAUser));
// router.post('/sigIn',asyncMiddleware(UsersController.signIn));
// router.post('/logout',asyncMiddleware(UsersController.logoutAUser));
// router.get('/profile',asyncMiddleware(UsersController.getUserProfile));
// router.put('/profile',asyncMiddleware(UsersController.updateUserProfile));
// router.get('/',asyncMiddleware(UsersController.getUsers));
// router.get('/:id',asyncMiddleware(UsersController.getUserById));
// router.delete('/:id',asyncMiddleware(UsersController.deleteUser));
// router.put('/',asyncMiddleware(UsersController.updateUser));

export default router;
