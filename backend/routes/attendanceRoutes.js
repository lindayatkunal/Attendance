const express = require("express");
const router = express.Router();

const attendanceController = require("../controllers/attendanceController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/check-in", authMiddleware, attendanceController.checkIn);
router.post("/check-out", authMiddleware, attendanceController.checkOut);
router.get("/timesheet", authMiddleware, attendanceController.getTimesheet);

module.exports = router;