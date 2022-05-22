'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieSchedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Movie, Theater}) {
      // define association here
      this.belongsTo(Movie, {
        foreignKey: "movieId",
      });
      this.belongsTo(Theater, {
        foreignKey: "theaterId",
      })
    }
  }
  MovieSchedule.init({
    showtime: DataTypes.DATE,
    movieId: DataTypes.STRING,
    theaterId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'MovieSchedule',
  });
  return MovieSchedule;
};