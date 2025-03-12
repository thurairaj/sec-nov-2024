const redis = require("redis");
const { logger } = require("./logger");

const client = redis.createClient({
  socket: {
    host: "localhost",
    port: 6379,
  },
});

client
  .connect()
  .then(() => logger.info("Connected to the database connection"))
  .catch((err) => logger.error(err));

exports.redisClient = client;
