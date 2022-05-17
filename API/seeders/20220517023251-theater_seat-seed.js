"use strict";

const { Theater, Seat } = require("../models");

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
    const theaterList = await Theater.findAll();
    const seatList = await Seat.findAll();

    if (theaterList && seatList) {
      for (let i = 0; i < theaterList.length; i++) {
        let theaterId = theaterList[i].id;
        for (let j = 0; j < seatList.length; j++) {
          let seatId = seatList[j].id;
          arr.push({
            id: "T-S_" + Math.floor(Math.random() * 999999999).toString(),
            theater_id: theaterId,
            seat_id: seatId,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
      }
    }

    await queryInterface.bulkInsert("Theater_Seats", arr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Theater_Seats", null, {});
  },
};
