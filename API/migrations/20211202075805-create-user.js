'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      birthDay: {
        type: Sequelize.DATEONLY
      },
      gender: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      role: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};