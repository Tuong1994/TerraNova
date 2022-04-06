'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shipment.init({
    userId: DataTypes.STRING,
    userName: DataTypes.STRING,
    address: DataTypes.STRING,
    ward: DataTypes.INTEGER,
    district: DataTypes.INTEGER,
    province: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipment',
  });
  return Shipment;
};