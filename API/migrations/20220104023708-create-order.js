"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      totalPay: {
        type: Sequelize.INTEGER,
      },
      paymentType: {
        type: Sequelize.INTEGER,
      },
      shipmentType: {
        type: Sequelize.INTEGER,
      },
      shipmentFee: {
        type: Sequelize.INTEGER,
      },
      shipmentDetail: {
        type: Sequelize.JSON,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      note: {
        type: Sequelize.STRING(2500),
      },
      products: {
        type: Sequelize.JSON,
      },
      userId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};
