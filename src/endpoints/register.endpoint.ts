import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import { ERROR } from '../constants'
import UserModel from '../models/user.model';
import { errorResponse, successResponse } from '../utils';
import { errorLog } from '../utils/logger/logger';

export const registerEndpoint = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, password, email } = req.body;
    
    const emailExists = await UserModel.findOne({ email });
    if (emailExists) {
      errorResponse(res, 400, ERROR.EXISTING_EMAIL);
    }
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
    });
  
    const savedUser = await user.save();
    successResponse(res, { email: savedUser.email, name: savedUser.name });
  } catch (e) {
    errorLog(e, req);
    errorResponse(res, 500, ERROR.DEFAULT);
  }
}