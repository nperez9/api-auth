import { Request, Response, NextFunction } from 'express';

import { myCache, errorResponse } from '../../utils';
import { errorLog } from '../../utils/logger/logger';
import { ERROR } from '../../constants/errors';

/**
 * Deletes all cache
 * @param {Request} req Express request
 * @param {Response} res Express response
 * @param {Next} next Express next functio
 */
export const deleteCacheMiddleware = (req: Request, res: Response, next: NextFunction): void | Promise<void> => {
  try {
    myCache.flushAll();
  } catch (e) {
		errorLog(e, req);
		return errorResponse(res, 500, ERROR.ERROR_CLEANING_CACHE);
  }
  next();
};
