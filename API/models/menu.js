"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ SubMenu }) {
      // define association here
      this.hasMany(SubMenu, {
        foreignKey: "menuId",
        as: "subMenu"
      });
    }
  }
  Menu.init(
    {
      path: DataTypes.STRING,
      name: DataTypes.STRING,
      icon: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Menu",
    }
  );
  return Menu;
};
