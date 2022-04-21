"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ CourseCategory, CourseOrder }) {
      // define association here
      this.belongsTo(CourseCategory, {
        foreignKey: "categoryId",
      });
      this.hasMany(CourseOrder, {
        foreignKey: "courseId",
        as: "students",
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
