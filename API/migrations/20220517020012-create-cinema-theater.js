"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cinema_Theaters", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      cinema_id: {
        type: Sequelize.STRING,
        references: {
          model: "Cinemas",
          key: "id",
        },
      },
      theater_id: {
        type: Sequelize.STRING,
        references: {
          model: "Theaters",
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
    await queryInterface.dropTable("Cinema_Theaters");
  },
};
