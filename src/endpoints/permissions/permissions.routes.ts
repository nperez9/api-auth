import { Router } from 'express';

import { permissionsCreateEndpoint } from './permissions-create.endpoint';
import { permissionSchema } from '../../validators/permission.validator'
import { validateBodyMiddleware, adminValidationMiddleware } from '../../middlewares';

const permissionRouter = Router();
const permissionMiddlewares = [
  adminValidationMiddleware,
  validateBodyMiddleware(permissionSchema),
];

permissionRouter.post('/permissions', permissionMiddlewares, permissionsCreateEndpoint);
permissionRouter.put('/permissions', permissionMiddlewares, permissionsCreateEndpoint);

export default permissionRouter;