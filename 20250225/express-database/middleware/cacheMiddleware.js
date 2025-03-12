const { redisClient } = require("../config/redis");
const { logger } = require("../config/logger");
const cacheMiddleware = async (req, res, next) => {
  const key = req.originalUrl;

  try {
    const value = await redisClient.get(key);
    if (!value) {
      res.sendResponse = res.json;
      res.json = (body) => {
        redisClient.setEx(key, 60, JSON.stringify(body));
        res.sendResponse(body);
      };
      next();
    } else {
      logger.info("Cache found for ", key, value);
      return res.json(JSON.parse(value));
    }
  } catch (error) {
    logger.error(error);
    next();
  }
};

const clearCache = async (pattern) => {
  logger.info("clearCache 🗒", pattern);
  const allKeys = await redisClient.keys(pattern);
  try {
    if (allKeys.length > 0) {
      await redisClient.del(allKeys);
      logger.info("Cache deleted for ", allKeys);
    }
  } catch (e) {
    logger.error("Cache error  🗒", e);
  }
};

module.exports = { cacheMiddleware, clearCache };
