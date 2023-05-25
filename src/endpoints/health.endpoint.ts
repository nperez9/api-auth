import { Request, Response } from 'express';
import { secondsToTime } from '../utils';

/**
 * Returns the health of the app with some additional info
 * @param {Request} req Express request
 * @param {Response} res Express response
 */
export const healthEndpoint = (req: Request, res: Response): void => {
  res.status(200).json({
    status: 'UP',
    description: 'Health of auth service',
    time: new Date().toISOString(),
    uptime: secondsToTime(process.uptime()),
    version: process.env.npm_package_version,
  });
};
