"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, Producer, PcSpecs }) {
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
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.JSON,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      productType: DataTypes.STRING,
      subMenuId: DataTypes.STRING,
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
