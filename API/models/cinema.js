"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie, Cinema_Movie }) {
      // define association here
      this.belongsToMany(Movie, {
        through: Cinema_Movie,
        foreignKey: "cinema_id",
        as: "movies",
      });
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
