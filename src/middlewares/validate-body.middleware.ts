import { Request, Response, NextFunction, RequestHandler } from 'express';
import { ObjectSchema } from 'joi';
import { errorResponse } from '../utils';

export const validateBodyMiddleware = (validationSchema: ObjectSchema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = validationSchema.validate(req.body);

    if (error) {
      return errorResponse(res, 400, error.message, error.details);
    }

    next();
  };
};
