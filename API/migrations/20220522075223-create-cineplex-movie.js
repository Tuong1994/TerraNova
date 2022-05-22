"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cineplex_Movies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      cineplex_id: {
        type: Sequelize.STRING,
        references: {
          model: "Cineplexes",
          key: "id",
        },
      },
      movie_id: {
        type: Sequelize.STRING,
        references: {
          model: "Movies",
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cineplex_Movies");
  },
};
