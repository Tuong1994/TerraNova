"use strict";
const { movieStatus } = require("../interface/movie");
const { Cinema, Movie } = require("../models");

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
    const movieList = await Movie.findAll({
      where: {
        status: movieStatus.showing
      }
    });

    if (cinemaList && movieList) {
      for (let i = 0; i < cinemaList.length; i++) {
        let cinemaId = cinemaList[i].id;
        for (let j = 0; j < movieList.length; j++) {
          let movieId = movieList[j].id;
          arr.push({
            // id: "C-M_" + Math.floor(Math.random() * 999999999).toString(),
            cinema_id: cinemaId,
            movie_id: movieId,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
      }
    }

    await queryInterface.bulkInsert("Cinema_Movies", arr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cinema_Movies", null, {});
  },
};
