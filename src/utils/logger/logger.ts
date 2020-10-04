import { Request } from 'express';
import { ResultsLog } from '../../constants';
import logger from './log-config';

const Levels = {
  info: 'info',
  error: 'error',
};

const defaultValue = {
  info: {
    action: 'generic',
    success: ResultsLog.SUCCESS,
    params: {},
  },
  error: {
    action: 'generic',
    success: ResultsLog.FAIL,
    params: {},
  },
};

/**
 * Just a log which formats the code
 * @param level 
 * @param message 
 * @param action 
 * @param success 
 * @param params 
 */
function log(level: string, message: string, action: string, success: string, params: any): void {
  const logAction = action || defaultValue[level].action;
  const logSuccess = success || defaultValue[level].success;
  const logParams = params || defaultValue[level].params;

  logger.log(level, `- Action: ${logAction} - Result: ${logSuccess} - ${JSON.stringify(logParams)} - ${message}`);
}

/**
 * Do an info whit the variables, parses Express request
 * @param {string} msg
 * @param {Request} req
 * @param {Results} results
 */
function infoLog(msg: string, req: Request, result: ResultsLog) {
  const action = `${req.method} ${req.url}`;
  const { body, params, query } = req;
  const message = `Message: ${msg}`;
  log(Levels.info, message, action, result, { body, params, query });
}

/**
 * Do an error whit the variables, parses Express request
 * @param {Error} error
 * @param {Request} req
 */
export function errorLog(error: Error, req: Request): void {
  const message = `Message: ${error.message} - StackTrace: ${error.stack}`;
  const action = `${req.method} ${req.url}`;
  const { body, params, query } = req;
  log(Levels.error, message, action, ResultsLog.FAIL, { body, params, query });
}
