'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lessons', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      nameENG: {
        type: Sequelize.STRING
      },
      nameVN: {
        type: Sequelize.STRING
      },
      nameCH: {
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
    await queryInterface.dropTable('Lessons');
  }
};