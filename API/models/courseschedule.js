"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CourseSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Course }) {
      // define association here
      this.belongsTo(Course, {
        foreignKey: "courseId",
      });
    }
  }
  CourseSchedule.init(
    {
      startDate: DataTypes.DATE,
      dateType: DataTypes.INTEGER,
      branch: DataTypes.INTEGER,
      courseId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CourseSchedule",
    }
  );
  return CourseSchedule;
};
