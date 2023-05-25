import { NextFunction, Response } from 'express';

import { CustomRequest, User } from '../../interfaces';
import UserModel from '../../models/user.model';
import { errorResponse, successResponse } from '../../utils';
import { ERROR } from '../../constants';

export const userEditEndpoint = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.data.user;
    const user = await UserModel.findById(id);

    if (!user) {
      errorResponse(res, 404, ERROR.INVALID_LOGIN);
    }

    const { name, email } = user as User;
    successResponse(res, { name, email });
  } catch (e) {
    next(e);
  }
};
