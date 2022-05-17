"use strict";

const { Cinema, Theater } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const arr = [];
    const cinemaList = await Cinema.findAll();
    const theaterList = await Theater.findAll();

    if (cinemaList && theaterList) {
      for (let i = 0; i < cinemaList.length; i++) {
        let cinemaId = cinemaList[i].id;
        for (let j = 0; j < theaterList.length; j++) {
          let theaterId = theaterList[j].id;
          arr.push({
            id: "C-T_" + Math.floor(Math.random() * 999999999).toString(),
            cinema_id: cinemaId,
            theater_id: theaterId,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
      }
    }

    await queryInterface.bulkInsert("Cinema_Theaters", arr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cinema_Theaters", null, {});
  },
};
