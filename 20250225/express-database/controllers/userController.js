const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const {
  UserRegistrationValidator,
  LoginValidator,
} = require("../validator/userValidators");
const { sign } = require("jsonwebtoken");
const { logger } = require("../config/logger");
const { clearCache } = require("../middleware/cacheMiddleware");

exports.registerUser = async (req, res, next) => {
  try {
    const validatedRequest = UserRegistrationValidator.safeParse(req.body);

    if (!validatedRequest.success) {
      return res.status(400).json({
        err: validatedRequest.error.flatten(),
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const registrationValidatedRequest = {
      ...validatedRequest.data,
      role: "user",
      password: hashedPassword,
    };

    const user = new User(registrationValidatedRequest);
    await Promise.all([user.save(), clearCache("/users*")]);
    res.status(200).send({
      success: true,
      email: user.email,
    });
  } catch (err) {
    next(err);
  }
};

exports.registerAdmin = async (req, res) => {
  try {
    const validatedRequest = UserRegistrationValidator.safeParse(req.body);

    if (!validatedRequest.success) {
      return res.status(400).json({
        err: validatedRequest.error.flatten(),
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const registrationValidatedRequest = {
      ...validatedRequest.data,
      role: "admin",
      password: hashedPassword,
    };

    const user = new User(registrationValidatedRequest);
    await user.save();
    await redisClient.del("/users*");
    logger.info(redisClient.keys("*"));
    res.status(200).send({
      success: true,
      email: user.email,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.loginUser = async (req, res) => {
  logger.debug("loginUser", req.body);
  const validatedRequest = LoginValidator.safeParse(req.body);
  if (!validatedRequest.success) {
    logger.error("loginUser:error", validatedRequest);
    return res.status(400).json({
      err: validatedRequest.error.flatten(),
    });
  }

  const { email, password } = validatedRequest.data;
  const user = await User.findOne({ email });
  if (!user) {
    logger.error("loginUser:no-user", { email });
    return res.status(403).send("Not Authorized");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(403).send("Not Authorized");
  }

  const token = sign({ id: user.id }, process.env.JWT_SECRET);
  res.json({ token });
};

exports.update = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) return res.status(404).send("User not found");
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found");

    res.status(200).json("User deleted");
  } catch (e) {
    res.status(500).json(err);
  }
};

exports.get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getUsers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const users = await User.find()
      .sort({ _id: -1 })
      .limit(limit)
      .skip((page - 1) * limit);
    const total = await User.countDocuments();
    logger.info("users found", { users, total, page, limit });
    res.set("X-Total-Count", total);
    res.status(200).json(users);
  } catch (err) {
    logger.error("error", err);
    res.status(500).json(err);
  }
};
