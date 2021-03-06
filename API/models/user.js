"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Carts, CourseOrder, Rate, Ticket }) {
      // define association here
      this.hasMany(Order, {
        foreignKey: "userId",
        as: "orders",
      });
      this.hasMany(Carts, {
        foreignKey: "userId",
        as: "carts",
      });
      this.hasMany(CourseOrder, {
        foreignKey: "userId",
        as: "courses",
      });
      this.hasMany(Rate, {
        foreignKey: "userId",
        as: "rates",
      });
      this.hasMany(Ticket, {
        foreignKey: "userId",
        as: "tickets"
      })
    }
  }
  User.init(
    {
      account: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      ward: DataTypes.INTEGER,
      district: DataTypes.INTEGER,
      province: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      birthDay: DataTypes.DATEONLY,
      gender: DataTypes.INTEGER,
      avatar: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
