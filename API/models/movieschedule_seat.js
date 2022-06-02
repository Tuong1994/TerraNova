'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieSchedule_Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieSchedule_Seat.init({
    movieSchedule_id: DataTypes.STRING,
    seat_id: DataTypes.STRING,
    isBooked: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'MovieSchedule_Seat',
  });
  return MovieSchedule_Seat;
};