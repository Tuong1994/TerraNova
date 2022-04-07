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
      paymentType: DataTypes.INTEGER,
      totalPay: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      shipmentType: DataTypes.INTEGER,
      shipmentFee: DataTypes.INTEGER,
      shipmentDetail: DataTypes.JSON,
      products: DataTypes.JSON,
      note: DataTypes.STRING,
      userId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
