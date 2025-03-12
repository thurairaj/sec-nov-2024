const mongoose = require("mongoose");
const { logger } = require("./logger");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    logger.info("MongoDB Connected ✅");
  } catch (e) {
    logger.error("MongoDB connection error ❌", e);
    process.exit(1);
  }
};

module.exports = connectDB;
