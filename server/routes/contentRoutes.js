const express = require("express");
const router = express.Router();
const { repurpose, getHistory} = require("../controllers/contentController")
const authmiddleware = require("../middleware/authMiddleware")

router.post('/repurpose', authmiddleware, repurpose)
router.get('/history', authmiddleware, getHistory)

module.exports = router;

