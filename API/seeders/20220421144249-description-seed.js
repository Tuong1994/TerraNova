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
      "Descriptions",
      [
        {
          id: "D_000000001",
          name: "Total Cores",
          content: "4",
          productId: "P_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "D_000000002",
          name: "Total Thread",
          content: "4",
          productId: "P_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "D_000000003",
          name: "Base Frequency",
          content: "3.60 GHz",
          productId: "P_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "D_000000004",
          name: "Cache",
          content: "6 MB Intel® Smart Cache",
          productId: "P_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "D_000000005",
          name: "Bus speed",
          content: "8 GT/s",
          productId: "P_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "D_000000006",
          name: "TDP",
          content: "65W",
          productId: "P_0001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: "D_000000007",
          name: "Total Cores",
          content: "6",
          productId: "P_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "D_000000008",
          name: "Total Thread",
          content: "6",
          productId: "P_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "D_000000009",
          name: "Base Frequency",
          content: "4.00 GHz",
          productId: "P_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "D_000000010",
          name: "Cache",
          content: "9 MB Intel® Smart Cache",
          productId: "P_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "D_000000011",
          name: "Bus speed",
          content: "8 GT/s",
          productId: "P_0002",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "D_000000012",
          name: "TDP",
          content: "65W",
          productId: "P_0002",
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
    await queryInterface.bulkDelete("Descriptions", null, {});
  },
};
