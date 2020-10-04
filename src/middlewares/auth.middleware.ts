import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
  
export const privateRoute = (req: Request, res: Response, next: NextFunction): any => {
  // TODO: check expiration Date
  const token = req.headers['auth-token'];
  if (!token) {
    return res.status(403).json({
      message: 'You need to login to access this feature',
      code: 1005
    });
  }

  try {
    const user = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = user;
    next();
  } catch (e) {
    res.status(403).json({message: 'Invalid Token', code: 1006});
  }
};