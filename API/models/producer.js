'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category_Producer, Category, Product}) {
      // define association here
      this.belongsToMany(Category, {
        through: Category_Producer,
        foreignKey: "producer_id",
        as: "producerList"
      })
      this.hasMany(Product, {
        foreignKey: "producerId",
        as: "productList",
      })
    }
  };
  Producer.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producer',
  });
  return Producer;
};