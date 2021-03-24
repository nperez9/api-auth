import { Response, NextFunction } from 'express';
import { errorLog } from '../utils/logger/logger';
import { errorResponse, JWTUtil } from '../utils';
import { ERROR } from '../constants/errors';
import { CustomRequest } from '../interfaces/request.interface';
  
export const privateRoute = (req: CustomRequest, res: Response, next: NextFunction): any => {
  // TODO: check expiration Date
  const token = req.headers['auth-token'] as string;
  if (!token) {
    return errorResponse(res, 403, ERROR.NOT_SING_IN);
  }

  try {
    const user = JWTUtil.createToken(token);
    req.data = { ...req.data, user };
    next();
  } catch (e) {
    errorLog(e, req);
    errorResponse(res, 403, ERROR.INVALID_TOKEN);
  }
};