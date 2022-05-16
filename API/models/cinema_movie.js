'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cinema_Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cinema_Movie.init({
    cinema_id: DataTypes.STRING,
    movie_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cinema_Movie',
  });
  return Cinema_Movie;
};