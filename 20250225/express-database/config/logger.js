const { createLogger, format, transports } = require("winston");
const { timestamp, label, prettyPrint } = format;

const logger = createLogger({
  level: process.env.LOG_LEVEL,
  format: format.combine(timestamp(), format.json()),
  transports: [new transports.Console()],
});

module.exports = { logger };
