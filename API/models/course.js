"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      CourseCategory,
      CourseOrder,
      Lesson,
      CourseSchedule,
      Rate,
    }) {
      // define association here
      this.belongsTo(CourseCategory, {
        foreignKey: "categoryId",
        as: "category",
      });
      this.hasMany(CourseOrder, {
        foreignKey: "courseId",
        as: "students",
      });
      this.hasMany(Lesson, {
        foreignKey: "courseId",
        as: "lessons",
      });
      this.hasMany(CourseSchedule, {
        foreignKey: "courseId",
        as: "schedules",
      });
      this.hasMany(Rate, {
        foreignKey: "courseId",
        as: "rates",
      });
    }
  }
  Course.init(
    {
      nameENG: DataTypes.STRING,
      nameVN: DataTypes.STRING,
      nameCH: DataTypes.STRING,
      descENG: DataTypes.STRING,
      descVN: DataTypes.STRING,
      descCH: DataTypes.STRING,
      image: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      profit: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      trainingTime: DataTypes.INTEGER,
      categoryId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
