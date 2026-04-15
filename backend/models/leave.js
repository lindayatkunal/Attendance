module.exports = (sequelize, DataTypes) => {
  const Leave = sequelize.define("Leave", {
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "Pending",
    },
  });

  Leave.associate = (models) => {
    Leave.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };

  return Leave;
};