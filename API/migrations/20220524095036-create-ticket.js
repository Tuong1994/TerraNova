"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tickets", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      movieScheduleId: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.STRING,
      },
      seats: {
        type: Sequelize.JSON,
      },
      contact: {
        type: Sequelize.JSON,
      },
      paymentType: {
        type: Sequelize.INTEGER,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tickets");
  },
};
