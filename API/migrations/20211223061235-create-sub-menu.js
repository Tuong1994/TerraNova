'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SubMenus', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      path: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      menuId: {
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
    await queryInterface.dropTable('SubMenus');
  }
};