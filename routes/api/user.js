const express = require("express");

const router = express.Router();

const userControllers = require("../../controllers/userControllers/index")
const authMiddleware = require("../../middleware/authMiddleware")

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);
router.get("/logout", authMiddleware, userControllers.logout)
router.get("/current", authMiddleware, userControllers.current)

module.exports = router;