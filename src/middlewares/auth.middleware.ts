import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { errorLog } from '../utils/logger/logger';
import { errorResponse } from '../utils';
import { ERROR } from '../constants/errors';
  
export const privateRoute = (req: Request, res: Response, next: NextFunction): any => {
  // TODO: check expiration Date
  const token = req.headers['auth-token'] as string;
  if (!token) {
    return errorResponse(res, 403, ERROR.NOT_SING_IN);
  }

  try {
    const user = jwt.verify(token, process.env.SECRET_TOKEN as Secret);
    req.user = user;
    next();
  } catch (e) {
    errorLog(e, req);
    errorResponse(res, 403, ERROR.INVALID_TOKEN);
  }
};