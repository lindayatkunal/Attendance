const express = require("express");
const router = express.Router();

const leaveController = require("../controllers/leaveController");
const authMiddleware = require("../middleware/authMiddleware");

// Apply leave
router.post("/", authMiddleware, leaveController.applyLeave);

// Get leaves
router.get("/", authMiddleware, leaveController.getLeaves);

module.exports = router;