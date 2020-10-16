import { Router } from 'express';
import { privateRoute } from '../../middlewares/auth.middleware';
import { userInfoEndpoint } from './users-info.endpoint';

const userRouter = Router();

userRouter.get('/info', privateRoute, userInfoEndpoint);

export default userRouter;