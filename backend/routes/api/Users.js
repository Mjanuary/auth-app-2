const express = require("express");
const { v4: uuidv4 } = require("uuid");
const errorFormatter = require("../../controllers/errorFormatter");

// const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth"); // Middleware
const User = require("../../models/users"); // Models

//setting router
const router = express.Router();

module.exports = router;
