require("dotenv").config();
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const { logger } = require("./config/logger");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
app.use(bodyParser.json());

connectDB();
app.use(passport.initialize());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  logger.info(`Express server listening on port ${process.env.PORT}`);
});
