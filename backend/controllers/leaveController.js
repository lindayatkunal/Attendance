const { Leave } = require("../models");

// ✅ Apply Leave
exports.applyLeave = async (req, res) => {
  try {
    const { startDate, endDate, reason, type } = req.body;

    const leave = await Leave.create({
      userId: req.user.id,
      startDate,
      endDate,
      reason,
      type,
      status: "pending",
    });

    res.json({ message: "Leave applied successfully", leave });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get My Leaves
exports.getLeaves = async (req, res) => {
  try {
    const leaves = await Leave.findAll({
      where: { userId: req.user.id },
      order: [["createdAt", "DESC"]],
    });

    res.json(leaves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};