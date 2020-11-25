import { Request, Response } from 'express';

import PermissionModel from '../../models/permission.model';
import { ERROR, RESPONSES } from '../../constants';
import { errorResponse, successResponse } from '../../utils';
import { errorLog } from '../../utils/logger/logger';

export const permissionsCreateEndpoint = async (req: Request, res: Response): Promise<void> => {
  try {
    const { code, endpoint, description } = req.body;

    const permissionExist = await PermissionModel.findOne({ code });
    if (permissionExist) {
      return errorResponse(res, 400, 'This code already exist');
    }

    const result = await PermissionModel.create({ code, endpoint, description });
    successResponse(res, { message: RESPONSES.PERMISSION_CREATED, code: result.code, endpoint: result.endpoint });
  } catch(e) {
    errorLog(e, req);
    errorResponse(res, 500, ERROR.DEFAULT);
  }
};
