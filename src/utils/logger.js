const logger = require('./log-config');

const Levels = {
  info: 'info',
  error: 'error',
};

const Results = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  IN_PROGRESS: 'IN_PROGRESS',
};

const defaultValue = {
  info: {
    action: 'generic',
    success: Results.SUCCESS,
    params: {},
  },
  error: {
    action: 'generic',
    success: Results.FAIL,
    params: {},
  },
};

function log(level, message, action, success, params) {
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
function infoLog(msg, req, result) {
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
function errorLog(error, req) {
  const message = `Message: ${error.message} - StackTrace: ${error.stack}`;
  const action = `${req.method} ${req.url}`;
  const { body, params, query } = req;
  log(Levels.error, message, action, Results.FAIL, { body, params, query });
}

module.exports = {
  Results,
  infoLog,
  errorLog,
};
