'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CourseOrders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      courseId: {
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
      image: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      trainingTime: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('CourseOrders');
  }
};