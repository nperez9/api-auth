import { Response } from 'express';

/**
 * Return a success response, unifies the format
 * @param {Request} res Express response
 * @param {any} responseBody the response data
 * @param {number} code Http Code
 */
export const successResponse = (res: Response, responseBody?: any, code: number = 200): void => {
  res.status(code).json(responseBody);
}

/**
 * Return a error response, unifies the format
 * @param {Request} res Express response
 * @param {number} code Http Code
 * @param {string} message Error message to display
 * @param {string} additionalData any addional data than the error needs
 */
export const errorResponse = (res: Response, code: number, message: string, additionalData?: any): void => {
  res.status(code).json({
    status: 'fail',
    message,
    additionalData,
  });
}