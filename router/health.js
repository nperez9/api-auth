const healthRouter = require('express').Router();
const { secondsToTime } = require('../utils/time');

healthRouter.get('*', (req, res) => {
  return res.json({
    status: 'UP',
    description: 'Health of auth service',
    time: new Date().toISOString(),
    uptime: secondsToTime(process.uptime()),
    version: process.env.npm_package_version,
  });
});

module.exports = healthRouter;
