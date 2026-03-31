const express = require("express");
const router = express.Router();
const Content = require("../models/Content");
const { repurpose } = require("../controllers/contentController")
const authmiddleware = require("../middleware/authMiddleware")

router.post('/repurpose', authmiddleware, repurpose)

module.exports = router;

