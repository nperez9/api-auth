import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';

import { errorLog, infoLog } from "../utils/logger/logger";
import { ResultsLog, MESSAGE } from '../constants';
import UserModel from '../models/user.model';
import { errorResponse, successResponse } from '../utils';
import { ERROR } from '../constants';

export const loginEndpoint = async (req: Request, res: Response): Promise<void> => {
  try {
    infoLog('Log in', req, ResultsLog.IN_PROGRESS);
    const { password, email } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return errorResponse(res, 400, ERROR.INVALID_LOGIN);
    }

    const passValid = await bcrypt.compare(password, user.password);
    if (!passValid) {
      return errorResponse(res, 400, ERROR.INVALID_LOGIN);
    }

    //TODO: move to a library
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_TOKEN as Secret);

    infoLog('Logged', req, ResultsLog.SUCCESS);
    
    res.header({ 'auth-token': token });
    successResponse(res, { token, message: MESSAGE.LOGIN })
  } catch (e) {
    errorLog(e, req);
    errorResponse(res, 500, ERROR.DEFAULT);
  }
};
