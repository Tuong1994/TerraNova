"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CourseOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Course }) {
      // define association here
      this.belongsTo(Course, {
        foreignKey: "courseId",
      });
      this.belongsTo(User, {
        foreignKey: "userId"
      })
    }
  }
  CourseOrder.init(
    {
      courseId: DataTypes.STRING,
      userId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CourseOrder",
    }
  );
  return CourseOrder;
};
