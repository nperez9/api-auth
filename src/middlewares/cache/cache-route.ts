import { Request } from 'express';

import { myCache } from '../../utils';
import { errorLog } from '../../utils/logger/logger';


/**
 * Sets cache, the key is the route and this will catch the response, this will be used by get-chache.middleware
 * If this fails, the execution continue and log an error
 * @param {Request} req Express request
 * @param {any} response Endpoint response
 */
export const cacheRoute = (req: Request, response: any): void => {
  try {
    const cacheKey = `${req.hostname}${req.baseUrl}${req.url}`;
    myCache.set(cacheKey, response);
  } catch (e) {
    errorLog(e, req);
  }
};
