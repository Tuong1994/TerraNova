"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Category,
      Producer,
      PcSpecs,
      Description,
      Comment,
      Rate,
    }) {
      // define association here
      this.belongsTo(Category, {
        foreignKey: "categoryId",
      });
      this.belongsTo(Producer, {
        foreignKey: "producerId",
      });
      this.hasMany(PcSpecs, {
        foreignKey: "productId",
      });
      this.hasMany(Description, {
        foreignKey: "productId",
        as: "description",
      });
      this.hasMany(Comment, {
        foreignKey: "productId",
        as: "comments",
      });
      this.hasMany(Rate, {
        foreignKey: "productId",
        as: "rates",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.JSON,
      cost: DataTypes.INTEGER,
      profit: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      inventoryStatus: DataTypes.INTEGER,
      stockAmount: DataTypes.INTEGER,
      categoryId: DataTypes.STRING,
      producerId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
