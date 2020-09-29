const NodeCache = require('node-cache');

export const myCache = new NodeCache({
  stdTTL: 100,
  checkperiod: 120,
  deleteOnExpire: false,
});
