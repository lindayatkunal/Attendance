const { Attendance } = require("../models");
const { Op } = require("sequelize");

// ✅ CHECK-IN
exports.checkIn = async (req, res) => {
  try {
    const userId = req.user.id;

    const today = new Date();
    const startOfDay = new Date(today.setHours(0,0,0,0));
    const endOfDay = new Date(today.setHours(23,59,59,999));

    const existing = await Attendance.findOne({
      where: {
        userId,
        date: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
    });

    if (existing) {
      return res.status(400).json({ message: "Already checked in today" });
    }

    const attendance = await Attendance.create({
      userId,
      checkIn: new Date(),
      date: new Date(),
    });

    res.json({ message: "Checked in successfully", attendance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ CHECK-OUT
exports.checkOut = async (req, res) => {
  try {
    const userId = req.user.id;

    const today = new Date();
    const startOfDay = new Date(today.setHours(0,0,0,0));
    const endOfDay = new Date(today.setHours(23,59,59,999));

    const attendance = await Attendance.findOne({
      where: {
        userId,
        date: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
    });

    if (!attendance) {
      return res.status(400).json({ message: "Check-in first" });
    }

    if (attendance.checkOut) {
      return res.status(400).json({ message: "Already checked out" });
    }

    attendance.checkOut = new Date();
    await attendance.save();

    res.json({ message: "Checked out successfully", attendance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET TIMESHEET
exports.getTimesheet = async (req, res) => {
  try {
    const userId = req.user.id;

    const records = await Attendance.findAll({
      where: { userId },
      order: [["date", "DESC"]],
    });

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};