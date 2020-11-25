import { Request, Response } from 'express';

import PermissionModel from '../../models/permission.model';
import { ERROR, RESPONSES } from '../../constants';
import { errorResponse, successResponse } from '../../utils';
import { errorLog } from '../../utils/logger/logger';

export const permissionsCreateEndpoint = async (req: Request, res: Response): Promise<void> => {
  try {
    const { code, endpoint, description } = req.body;
    const result = await PermissionModel.create({ code, endpoint, description });
    
    if (result) {
      return errorResponse(res, 500, 'Error');
    }

    successResponse(res, RESPONSES.PERMISSION_CREATED);
  } catch(e) {
    errorLog(e, req);
    errorResponse(res, 500, ERROR.DEFAULT);
  }
};
