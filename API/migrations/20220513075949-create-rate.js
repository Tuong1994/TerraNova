'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rates', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      ratePoint: {
        type: Sequelize.INTEGER
      },
      note: {
        type: Sequelize.STRING(2500)
      },
      userId: {
        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.STRING
      },
      courseId: {
        type: Sequelize.STRING
      },
      movieId: {
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
    await queryInterface.dropTable('Rates');
  }
};