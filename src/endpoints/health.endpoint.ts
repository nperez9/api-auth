import { Request, Response } from 'express';
import { secondsToTime } from '../utils';

/**
 * Returns the health of the app with some additional info
 * @param {Request} req 
 * @param {Response} res 
 */
export const healthEndpoint = (req: Request, res: Response) => {
  return res.json({
    status: 'UP',
    description: 'Health of auth service',
    time: new Date().toISOString(),
    uptime: secondsToTime(process.uptime()),
    version: process.env.npm_package_version,
  });
};

