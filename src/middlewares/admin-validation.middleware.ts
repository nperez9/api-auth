import { Response, NextFunction } from 'express';
import { errorLog } from '../utils/logger/logger';
import { errorResponse } from '../utils';
import { ERROR } from '../constants/errors';
import { CustomRequest, Roles } from '../interfaces';
  
export const adminValidationMiddleware = (req: CustomRequest, res: Response, next: NextFunction): any => {
  try {
    const { user } = req.data;
    if (user.role !== Roles.ADMIN) {
      return errorResponse(res, 403, ERROR.NOT_PERMISSIONS);
    }
    next();
  } catch (e) {
    errorLog(e, req);
    errorResponse(res, 403, ERROR.INVALID_TOKEN);
  }
};