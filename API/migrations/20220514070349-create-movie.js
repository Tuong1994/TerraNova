"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Movies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      nameENG: {
        type: Sequelize.STRING,
      },
      nameVN: {
        type: Sequelize.STRING,
      },
      nameCH: {
        type: Sequelize.STRING,
      },
      descENG: {
        type: Sequelize.STRING(2500),
      },
      descVN: {
        type: Sequelize.STRING(2500),
      },
      descCH: {
        type: Sequelize.STRING(2500),
      },
      image: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.STRING,
      },
      trailer: {
        type: Sequelize.STRING,
      },
      releaseDay: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.INTEGER,
      },
      actors: {
        type: Sequelize.STRING,
      },
      director: {
        type: Sequelize.STRING,
      },
      country: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Movies");
  },
};
