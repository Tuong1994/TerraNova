"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Theater,
      Theater_Seat,
      MovieSchedule,
      MovieSchedule_Seat,
    }) {
      // define association here
      this.belongsToMany(Theater, {
        foreignKey: "seat_id",
        through: Theater_Seat,
        as: "theaters",
      });
      this.belongsToMany(MovieSchedule, {
        foreignKey: "seat_id",
        through: MovieSchedule_Seat,
        as: "schedules",
      });
    }
  }
  Seat.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      isBooked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
