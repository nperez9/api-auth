import { Response } from 'express';
import { ResponseStatus } from "../interfaces";

export function response(res: Response, code: number, status: ResponseStatus, message: string): void {
  res.status(code).json({
    status,
    message,
  })
}