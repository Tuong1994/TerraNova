"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema, Theater, Cinema_Movie, Theater_Movie }) {
      // define association here
      this.belongsToMany(Cinema, {
        through: Cinema_Movie,
        foreignKey: "movie_id",
        as: "movieList",
      });
      this.belongsToMany(Theater, {
        foreignKey: "movie_id",
        through: Theater_Movie,
        as: "movies",
      });
    }
  }
  Movie.init(
    {
      nameENG: DataTypes.STRING,
      nameVN: DataTypes.STRING,
      nameCH: DataTypes.STRING,
      descENG: DataTypes.STRING,
      descVN: DataTypes.STRING,
      descCH: DataTypes.STRING,
      image: DataTypes.STRING,
      duration: DataTypes.STRING,
      trailer: DataTypes.STRING,
      releaseDay: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
