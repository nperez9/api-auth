import { Response } from 'express';

import { CustomRequest, User } from '../../interfaces';
import UserModel from '../../models/user.model';
import { errorResponse, successResponse } from '../../utils';
import { ERROR } from '../../constants';
import { errorLog } from '../../utils/logger/logger';

export const userInfoEndpoint = async (req: CustomRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.data.user;
    console.info(req.data.user);
    const user = await UserModel.findById(id);

    if (!user) {
      errorResponse(res, 404, ERROR.INVALID_LOGIN);
    }

    const { name, email } = user as User;
    successResponse(res, { name, email });
  } catch (e) {
    errorLog(e, req);
    errorResponse(res, 500, ERROR.DEFAULT);
  }
};
