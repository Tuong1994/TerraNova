"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MovieSchedule_Seats", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      movieSchedule_id: {
        type: Sequelize.STRING,
        references: {
          model: "MovieSchedules",
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
      isBooked: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("MovieSchedule_Seats");
  },
};
