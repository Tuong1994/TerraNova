"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "CourseCategories",
      [
        {
          id: "design",
          nameENG: "WEB DESIGN",
          nameVN: "THIẾT KẾ WEB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "frontEnd",
          nameENG: "FRONTEND PROGRAMMING",
          nameVN: "LẬP TRÌNH FRONTEND",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "backEnd",
          nameENG: "BACKEND PROGRAMMING",
          nameVN: "LẬP TRÌNH BACKEND",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "fullStack",
          nameENG: "FULLSTACK PROGRAMMING",
          nameVN: "LẬP TRÌNH FULLSTACK",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "mobile",
          nameENG: "MOBILE PROGRAMMING",
          nameVN: "LẬP TRÌNH DI ĐỘNG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "mindset",
          nameENG: "MINDSET PROGRAMMING",
          nameVN: "TƯ DUY LẬP TRÌNH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("CourseCategories", null, {});
  },
};
