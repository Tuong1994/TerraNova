"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
