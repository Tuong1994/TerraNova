"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cineplex, Movie, Theater, Cinema_Movie, Cinema_Theater, MovieSchedule }) {
      // define association here
      this.belongsTo(Cineplex, {
        foreignKey: "cineplexId"
      })
      this.belongsToMany(Movie, {
        through: Cinema_Movie,
        foreignKey: "cinema_id",
        as: "movieList",
      });
      this.belongsToMany(Theater, {
        through: Cinema_Theater,
        foreignKey: "cinema_id",
        as: "theaters"
      });
      this.hasMany(MovieSchedule, {
        foreignKey: "cinemaId",
        as: "schedules"
      })
    }
  }
  Cinema.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      address: DataTypes.STRING,
      cineplexId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
