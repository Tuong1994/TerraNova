"use strict";
const { MovieSchedule, Seat } = require("../models");

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
    const movieScheduleList = await MovieSchedule.findAll();
    const seatList = await Seat.findAll();

    if (movieScheduleList && seatList) {
      for (let i = 0; i < movieScheduleList.length; i++) {
        let movieScheduleId = movieScheduleList[i].id;
        for (let j = 0; j < seatList.length; j++) {
          let seatId = seatList[j].id;
          arr.push({
            id: "MS-S_" + Math.floor(Math.random() * 999999999).toString(),
            movieSchedule_id: movieScheduleId,
            seat_id: seatId,
            isBooked: false,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
      }
    }

    await queryInterface.bulkInsert("MovieSchedule_Seats", arr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("MovieSchedule_Seats", null, {});
  },
};
