import { Router } from 'express';

import { healthEndpoint } from './endpoints/health.endpoint';
import { loginEndpoint } from './endpoints/login.endpoint';
import { registerEndpoint } from './endpoints/register.endpoint';

import { validateBodyMiddleware, privateRoute } from './middlewares';
import { loginUserSchema, registerUserSchema } from './validators/user.validator';

import userRouter from './endpoints/users/users.routes';
import permissionRouter from './endpoints/permissions/permissions.routes';

const router = Router();

router.get('/health', healthEndpoint);
router.post('/login', validateBodyMiddleware(loginUserSchema), loginEndpoint);
router.post('/register', validateBodyMiddleware(registerUserSchema), registerEndpoint);

router.use('/users', userRouter);
router.use('/permissions', privateRoute, permissionRouter);

export default router;