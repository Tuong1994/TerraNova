'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category_Producer, Producer, Product, SubMenu}) {
      // define association here
      this.belongsToMany(Producer, {
        through: Category_Producer,
        foreignKey: "producer_id"
      })
      this.hasMany(Product, {
        foreignKey: "categoryId"
      });
      this.belongsTo(SubMenu, {
        foreignKey: "subMenuId"
      })
    }
  };
  Category.init({
    name: DataTypes.STRING,
    subMenuId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};