"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cineplex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cinema, Movie, Cineplex_Movie }) {
      // define association here
      this.hasMany(Cinema, {
        foreignKey: "cineplexId",
        as: "cinemas",
      });
      this.belongsToMany(Movie, {
        foreignKey: "cineplex_id",
        through: Cineplex_Movie,
        as: "movies"
      })
    }
  }
  Cineplex.init(
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cineplex",
    }
  );
  return Cineplex;
};
