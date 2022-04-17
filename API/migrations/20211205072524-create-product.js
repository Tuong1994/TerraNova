'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.JSON
      },
      price: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      inventoryStatus: {
        type: Sequelize.INTEGER
      },
      stockAmount: {
        type: Sequelize.INTEGER
      },
      productType: {
        type: Sequelize.STRING
      },
      subMenuId: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.STRING
      },
      producerId: {
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
    await queryInterface.dropTable('Products');
  }
};