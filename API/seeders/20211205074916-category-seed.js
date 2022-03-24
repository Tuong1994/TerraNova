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
          active: false,
          subMenuId: "SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "mainboard",
          name: "MAINBOARD",
          active: false,
          subMenuId: "SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ram",
          name: "RAM",
          active: false,
          subMenuId: "SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "hdd",
          name: "HDD",
          active: false,
          subMenuId: "SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ssd",
          name: "SSD",
          active: false,
          subMenuId: "SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "vga",
          name: "VGA - GRAPHICS CARD",
          active: false,
          subMenuId: "SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "psu",
          name: "PSU - POWER SUPLLY UNIT",
          active: false,
          subMenuId: "SM_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "monitor",
          name: "MONITER",
          active: false,
          subMenuId: "SM_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "fax",
          name: "FAX MACHINE",
          active: false,
          subMenuId: "SM_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "printer",
          name: "PRINTER",
          active: false,
          subMenuId: "SM_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "laptop",
          name: "LAPTOP",
          active: false,
          subMenuId: "SM_0003",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "pc_set",
          name: "PC SET",
          active: false,
          subMenuId: "SM_0003",
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
