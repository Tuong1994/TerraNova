'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      parentId: {
        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.STRING
      },
      courseId: {
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
    await queryInterface.dropTable('Comments');
  }
};