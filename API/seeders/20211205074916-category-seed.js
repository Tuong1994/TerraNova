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
          nameENG: "CPU",
          nameVN: "VI XỬ LÝ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "mainboard",
          nameENG: "MAINBOARD",
          nameVN: "BO MẠCH CHỦ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ram",
          nameENG: "RAM",
          nameVN: "BỘ NHỚ TẠM THỜI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "hdd",
          nameENG: "HDD",
          nameVN: "Ổ CỨNG HDD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ssd",
          nameENG: "SSD",
          nameVN: "Ổ CỨNG SSD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "vga",
          nameENG: "VGA - GRAPHICS CARD",
          nameVN: "CARD ĐỒ HỌA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "psu",
          nameENG: "PSU - POWER SUPLLY UNIT",
          nameVN: "NGUỒN MÁY TÍNH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "monitor",
          nameENG: "MONITER",
          nameVN: "MÀN HÌNH",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "fax",
          nameENG: "FAX MACHINE",
          nameVN: "MÁY FAX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "printer",
          nameENG: "PRINTER",
          nameVN: "MÁY IN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "laptop",
          nameENG: "LAPTOP",
          nameVN: "MÁY TÍNH XÁCH TAY",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "pc_set",
          nameENG: "PC SET",
          nameVN: "MÁY TÍNH BỘ",
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
