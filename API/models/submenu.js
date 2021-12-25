"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubMenu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Menu, Category }) {
      // define association here
      this.belongsTo(Menu, {
        foreignKey: "menuId",
      });
      this.hasMany(Category, {
        foreignKey: "subMenuId",
        as: "categoryMenu"
      })
    }
  }
  SubMenu.init(
    {
      path: DataTypes.STRING,
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      menuId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SubMenu",
    }
  );
  return SubMenu;
};
