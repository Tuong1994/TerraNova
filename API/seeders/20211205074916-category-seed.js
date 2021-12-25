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
      "Categories",
      [
        {
          id: "cpu",
          name: "CPU",
          subMenuId: "#SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "mainboard",
          name: "MAINBOARD",
          subMenuId: "#SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ram",
          name: "RAM",
          subMenuId: "#SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "hdd",
          name: "HDD",
          subMenuId: "#SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ssd",
          name: "SSD",
          subMenuId: "#SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "vga",
          name: "VGA - GRAPHICS CARD",
          subMenuId: "#SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "psu",
          name: "PSU - POWER SUPLLY UNIT",
          subMenuId: "#SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "monitor",
          name: "MONITER",
          subMenuId: "#SM_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "fax",
          name: "FAX MACHINE",
          subMenuId: "#SM_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "printer",
          name: "PRINTER",
          subMenuId: "#SM_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "laptop",
          name: "LAPTOP",
          subMenuId: "#SM_0003",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "pc_set",
          name: "PC SET",
          subMenuId: "#SM_0003",
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
     await queryInterface.bulkDelete('Categories', null, {});
  },
};
