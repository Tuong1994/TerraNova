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
      course: DataTypes.JSON,
      userId: DataTypes.STRING,
      courseId: DataTypes.STRING,
      register: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "CourseOrder",
    }
  );
  return CourseOrder;
};
