"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Cinema,
      Movie,
      Seat,
      MovieSchedule,
      Cinema_Theater,
      Theater_Movie,
      Theater_Seat,
    }) {
      // define association here
      this.belongsToMany(Cinema, {
        foreignKey: "theater_id",
        through: Cinema_Theater,
        as: "cinemas",
      });
      this.belongsToMany(Movie, {
        foreignKey: "theater_id",
        through: Theater_Movie,
        as: "movies",
      });
      this.belongsToMany(Seat, {
        foreignKey: "theater_id",
        through: Theater_Seat,
        as: "seats",
      });
      this.hasMany(MovieSchedule, {
        foreignKey: "theaterId",
        as: "schedules",
      })
    }
  }
  Theater.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Theater",
    }
  );
  return Theater;
};
