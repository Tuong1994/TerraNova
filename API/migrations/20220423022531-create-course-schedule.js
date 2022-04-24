"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CourseSchedules", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.DATE,
      },
      dateType: {
        type: Sequelize.INTEGER,
      },
      branch: {
        type: Sequelize.INTEGER,
      },
      courseId: {
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
    await queryInterface.dropTable("CourseSchedules");
  },
};
