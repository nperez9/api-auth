import { Request, Response } from 'express';

import PermissionModel from '../../models/permission.model';
import { ERROR, RESPONSES } from '../../constants';
import { errorResponse, successResponse } from '../../utils';
import { errorLog } from '../../utils/logger/logger';

export const permissionsEditEndpoint = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, code, endpoint, description } = req.body;
    const permissionUpdate = await PermissionModel.findByIdAndUpdate(id, { code, endpoint, description });
    successResponse(res, RESPONSES.PERMISSION_CREATED);
  } catch(e) {
    errorLog(e, req);
    errorResponse(res, 500, ERROR.DEFAULT);
  }
};
