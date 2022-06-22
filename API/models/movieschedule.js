"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MovieSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie, Cinema, Theater, Seat, MovieSchedule_Seat }) {
      // define association here
      this.belongsTo(Movie, {
        foreignKey: "movieId",
        as: "movie",
      });
      this.belongsTo(Cinema, {
        foreignKey: "cinemaId",
        as: "cinema"
      })
      this.belongsTo(Theater, {
        foreignKey: "theaterId",
      });
      this.belongsToMany(Seat, {
        foreignKey: "movieSchedule_id",
        through: MovieSchedule_Seat,
        as: "seats",
      });
    }
  }
  MovieSchedule.init(
    {
      showTime: DataTypes.STRING,
      movieId: DataTypes.STRING,
      cinemaId: DataTypes.STRING,
      theaterId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MovieSchedule",
    }
  );
  return MovieSchedule;
};
