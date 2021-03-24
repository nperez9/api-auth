import { Router } from 'express';

import { privateRoute } from '../../middlewares';
import { userInfoEndpoint } from './users-info.endpoint';

const userRouter = Router();

userRouter.get('/info', privateRoute, userInfoEndpoint);
userRouter.put('/:id', privateRoute, userInfoEndpoint);

export default userRouter;
