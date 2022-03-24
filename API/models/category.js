"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category_Producer, Producer, Product }) {
      // define association here
      this.belongsToMany(Producer, {
        through: Category_Producer,
        foreignKey: "category_id",
      });
      this.hasMany(Product, {
        foreignKey: "categoryId",
        as: "productList",
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      subMenuId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
