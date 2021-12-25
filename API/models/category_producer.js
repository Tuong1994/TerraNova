'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category_Producer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Category_Producer.init({
    category_id: DataTypes.STRING,
    producer_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category_Producer',
  });
  return Category_Producer;
};