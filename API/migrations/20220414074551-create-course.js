"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Courses", {
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
      cost: {
        type: Sequelize.INTEGER,
      },
      profit: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      trainingTime: {
        type: Sequelize.INTEGER,
      },
      categoryId: {
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
    await queryInterface.dropTable("Courses");
  },
};
