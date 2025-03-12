const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    success: false,
    message: err.message || "You hit a road block",
    stack: err.stack,
  });
};

module.exports = errorHandler;
