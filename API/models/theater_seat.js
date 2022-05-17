'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theater_Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Theater_Seat.init({
    theater_id: DataTypes.STRING,
    seat_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Theater_Seat',
  });
  return Theater_Seat;
};