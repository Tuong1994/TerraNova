'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Description extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      // define association here
      this.belongsTo(Product, {
        foreignKey: "productId",
      })
    }
  };
  Description.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    productId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Description',
  });
  return Description;
};