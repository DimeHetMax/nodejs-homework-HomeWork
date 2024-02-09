const express = require("express");

const router = express.Router();

const usersRoutes = require("./api/user")
const contactsRoutes = require("./api/contacts")

router.use("/contacts", contactsRoutes);
router.use("/user", usersRoutes);

module.exports = router;