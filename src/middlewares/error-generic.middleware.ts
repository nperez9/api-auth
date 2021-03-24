import { NextFunction, Request, Response } from 'express';
import { ERROR } from '../constants';
import { errorResponse } from '../utils';
import { errorLog } from '../utils/logger/logger';

/**
 * Generic express error middleware to catch errors
 * @param err 
 * @param req 
 * @param res 
 * @param next
 * @returns void 
 */
export const errorGenericMiddleware = (err: Error, req: Request, res: Response, next: NextFunction): any => {
  errorLog(err, req);
  console.error(err.message, err.stack);
  errorResponse(res, 500, ERROR.DEFAULT);
};