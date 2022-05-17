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
      "Theaters",
      [
        {
          id: "TH_0001",
          name: "01",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "TH_0002",
          name: "02",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "TH_0003",
          name: "03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "TH_0004",
          name: "04",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "TH_0005",
          name: "05",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "TH_0006",
          name: "06",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "TH_0007",
          name: "07",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "TH_0008",
          name: "08",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "TH_0009",
          name: "09",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "TH_0010",
          name: "10",
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
    await queryInterface.bulkDelete("Theaters", null, {});
  },
};
