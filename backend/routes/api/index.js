const express = require("express");
const router = express.Router();

/**
 * @import Roouters
 */
router.use("/auth", require("./Auth"));
router.use("/roles", require("./Roles"));
router.use("/users", require("./Users"));
router.use("/password_reset", require("./reset_password"));

module.exports = router;
