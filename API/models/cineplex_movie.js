'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cineplex_Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cineplex_Movie.init({
    cineplex_id: DataTypes.STRING,
    movie_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cineplex_Movie',
  });
  return Cineplex_Movie;
};