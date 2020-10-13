import { Router } from 'express';

import { healthEndpoint } from './endpoints/health.endpoint';
import { loginEndpoint } from './endpoints/login.endpoint';
import { registerEndpoint } from './endpoints/register.endpoint';

import { validateBodyMiddleware } from './middlewares/validate-body.middleware';
import { loginUserSchema, registerUserSchema } from './validators/user.validator';

const router = Router();

router.get('/health', healthEndpoint);
router.post('/login', validateBodyMiddleware(loginUserSchema), loginEndpoint);
router.post('/register', validateBodyMiddleware(registerUserSchema), registerEndpoint);


export default router;