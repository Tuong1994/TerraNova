"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.belongsTo(Product, {
        foreignKey: "productId",
      });
    }
  }
  Comment.init(
    {
      body: DataTypes.STRING,
      userName: DataTypes.STRING,
      userId: DataTypes.STRING,
      parentId: DataTypes.STRING,
      productId: DataTypes.STRING,
      courseId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
