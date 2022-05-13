"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product, Course }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: "userId",
      });
      this.belongsTo(Product, {
        foreignKey: "productId",
      });
      this.belongsTo(Course, {
        foreignKey: "courseId",
      });
    }
  }
  Rate.init(
    {
      ratePoint: DataTypes.INTEGER,
      userId: DataTypes.STRING,
      productId: DataTypes.STRING,
      courseId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Rate",
    }
  );
  return Rate;
};
