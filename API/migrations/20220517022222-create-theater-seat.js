"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Theater_Seats", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      theater_id: {
        type: Sequelize.STRING,
        references: {
          model: "Theaters",
          key: "id",
        },
      },
      seat_id: {
        type: Sequelize.STRING,
        references: {
          model: "Seats",
          key: "id",
        },
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
    await queryInterface.dropTable("Theater_Seats");
  },
};
