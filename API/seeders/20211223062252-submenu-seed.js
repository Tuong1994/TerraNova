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
      "SubMenus",
      [
        {
          id: "#SM_0001",
          path: "/product/pcAccessories",
          name: "PC Accessories",
          menuId: "#M_0002",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#SM_0002",
          path: "/product/electronics",
          name: "Electronics",
          menuId: "#M_0002",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#SM_0003",
          path: "/product/computer",
          name: "Computer",
          menuId: "#M_0002",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#SM_0004",
          path: "/course/frontEnd",
          name: "FrontEnd Programing",
          menuId: "#M_0003",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#SM_0005",
          path: "/course/backEnd",
          name: "BackEnd Programing",
          menuId: "#M_0003",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#SM_0006",
          path: "/course/fullStack",
          name: "FullStack Programing",
          menuId: "#M_0003",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#SM_0007",
          path: "/course/mobile",
          name: "Mobile Programing",
          menuId: "#M_0003",
          active: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "#SM_0008",
          path: "/course/mindSet",
          name: "Mindset Programing",
          menuId: "#M_0003",
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
     await queryInterface.bulkDelete('SubMenus', null, {});
  },
};
