const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticate, authorize } = require("../middleware/authMiddleware");
const { cacheMiddleware } = require("../middleware/cacheMiddleware");

router.post("/register-user", userController.registerUser);
router.post("/register-admin", userController.registerAdmin);
router.post("/login", userController.loginUser);
router.get(
  "/",
  authenticate,
  authorize(["admin"]),
  cacheMiddleware,
  userController.getUsers,
);
router.get("/:id", authenticate, userController.get);

module.exports = router;
