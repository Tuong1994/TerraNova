'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CourseOrder.init({
    courseId: DataTypes.STRING,
    nameVN: DataTypes.STRING,
    nameENG: DataTypes.STRING,
    nameCH: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    trainingTime: DataTypes.INTEGER,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CourseOrder',
  });
  return CourseOrder;
};