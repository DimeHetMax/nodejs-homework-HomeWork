const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware")
const usersRoutes = require("./api/user")
const contactsRoutes = require("./api/contacts")

router.use("/contacts", authMiddleware, contactsRoutes);
router.use("/users", usersRoutes);

module.exports = router;