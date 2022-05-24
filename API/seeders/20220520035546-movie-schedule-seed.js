"use strict";

const { movieSchedule } = require("../data/movie");

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
    const arr = movieSchedule.slice(0, 500).map((i, index) => {
      return {
        id: "MS_000" + (index + 1),
        showtime: i.showTime,
        theaterId: i.theaterId,
        movieId: i.movieId,
        cinemaId: i.cinemaId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert("MovieSchedules", arr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("MovieSchedules", null, {});
  },
};
