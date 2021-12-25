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
      "Category_Producers",
      [
        //CPU
        {
          id: 1,
          category_id: "cpu",
          producer_id: "intel",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          category_id: "cpu",
          producer_id: "amd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // MAINBOARD
        {
          id: 3,
          category_id: "mainboard",
          producer_id: "asus",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          category_id: "mainboard",
          producer_id: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          category_id: "mainboard",
          producer_id: "msi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          category_id: "mainboard",
          producer_id: "asrock",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 7,
          category_id: "mainboard",
          producer_id: "asrock",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //RAM
        {
          id: 8,
          category_id: "ram",
          producer_id: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 9,
          category_id: "ram",
          producer_id: "corsair",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 10,
          category_id: "ram",
          producer_id: "kingston",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // HDD
        {
          id: 11,
          category_id: "hdd",
          producer_id: "seagate",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 12,
          category_id: "hdd",
          producer_id: "western",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // SSD
        {
          id: 13,
          category_id: "ssd",
          producer_id: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 14,
          category_id: "ssd",
          producer_id: "samsung",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 15,
          category_id: "ssd",
          producer_id: "kingston",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 16,
          category_id: "ssd",
          producer_id: "western",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // VGA
        {
          id: 17,
          category_id: "vga",
          producer_id: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 18,
          category_id: "vga",
          producer_id: "asus",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 19,
          category_id: "vga",
          producer_id: "msi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // PSU
        {
          id: 20,
          category_id: "psu",
          producer_id: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 21,
          category_id: "psu",
          producer_id: "deepcool",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 22,
          category_id: "psu",
          producer_id: "coolermaster",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 23,
          category_id: "psu",
          producer_id: "corsair",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // MONITOR
        {
          id: 24,
          category_id: "monitor",
          producer_id: "samsung",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 25,
          category_id: "monitor",
          producer_id: "lg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 26,
          category_id: "monitor",
          producer_id: "viewsonic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // LAPTOP
        {
          id: 27,
          category_id: "laptop",
          producer_id: "gigabyte",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 28,
          category_id: "laptop",
          producer_id: "asus",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 29,
          category_id: "laptop",
          producer_id: "msi",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 30,
          category_id: "laptop",
          producer_id: "dell",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 31,
          category_id: "laptop",
          producer_id: "hp",
          createdAt: new Date(),
          updatedAt: new Date()
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
     await queryInterface.bulkDelete('Category_Producers', null, {});
  },
};
