'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MovieSchedules', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      showTime: {
        type: Sequelize.STRING
      },
      movieId: {
        type: Sequelize.STRING
      },
      theaterId: {
        type: Sequelize.STRING
      },
      cinemaId: {
        type: Sequelize.STRING
      },
      cineplexId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MovieSchedules');
  }
};