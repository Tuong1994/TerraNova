"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: "userId",
      });
    }
  }
  Order.init(
    {
      amount: DataTypes.INTEGER,
      note: DataTypes.STRING,
      paymentType: DataTypes.STRING,
      totalPay: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      productIds: DataTypes.JSON,
      userId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
