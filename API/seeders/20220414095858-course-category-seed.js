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
          nameCH: "网页设计",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "frontEnd",
          nameENG: "FRONTEND PROGRAMMING",
          nameVN: "LẬP TRÌNH FRONTEND",
          nameCH: "前端编程",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "backEnd",
          nameENG: "BACKEND PROGRAMMING",
          nameVN: "LẬP TRÌNH BACKEND",
          nameCH: "后端编程",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "fullStack",
          nameENG: "FULLSTACK PROGRAMMING",
          nameVN: "LẬP TRÌNH FULLSTACK",
          nameCH: "全栈编程",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "mobile",
          nameENG: "MOBILE PROGRAMMING",
          nameVN: "LẬP TRÌNH DI ĐỘNG",
          nameCH: "移动编程",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "mindset",
          nameENG: "MINDSET PROGRAMMING",
          nameVN: "TƯ DUY LẬP TRÌNH",
          nameCH: "编程思维",
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
