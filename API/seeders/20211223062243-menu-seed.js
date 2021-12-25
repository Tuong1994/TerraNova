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
      "Menus",
      [
        {
          id: "#M_0001",
          path: "/",
          name: "Home",
          icon: "fas fa-home",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#M_0002",
          path: "/product",
          name: "Product",
          icon: "fas fa-tag",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#M_0003",
          path: "/course",
          name: "Course",
          icon: "fas fa-book-open",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#M_0004",
          path: "/about",
          name: "About Us",
          icon: "fas fa-home",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#M_0005",
          path: "/contact",
          name: "Contact",
          icon: "fas fa-phone",
          active: false,
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
     await queryInterface.bulkDelete('Menus', null, {});
  },
};
