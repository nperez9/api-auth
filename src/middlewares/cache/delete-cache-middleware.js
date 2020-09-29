const { myCache } = require('../../util/cache');

/**
 * Deletes all cache
 * @param {Request} req
 * @param {Response} res
 * @param {Next} next
 */
module.exports.deleteCacheMiddleware = (req, res, next) => {
    try {
        myCache.flushAll();
    } catch (e) {
        console.error(e);
    }
    next();
};
