const express = require("express");

const router = express.Router();

const userControllers = require("../../controllers/userControllers/index")
const authMiddleware = require("../../middleware/authMiddleware")
const uploadMiddleware = require("../../middleware/upload")
router.post("/register", userControllers.register);
router.post("/login", userControllers.login);
router.post("/verify", userControllers.resendEmail)
router.get("/verify/:token", userControllers.verify)
router.get("/logout", authMiddleware, userControllers.logout)
router.get("/current", authMiddleware, userControllers.current)
router.patch("/avatars", authMiddleware, uploadMiddleware.single("avatar"), userControllers.avatar)
module.exports = router;