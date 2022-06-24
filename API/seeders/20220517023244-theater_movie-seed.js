"use strict";

const { Theater, Movie } = require("../models");

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
    const movieList = await Movie.findAll();

    if (theaterList && movieList) {
      for (let i = 0; i < theaterList.length; i++) {
        let theaterId = theaterList[i].id;
        for (let j = 0; j < movieList.length; j++) {
          let movieId = movieList[j].id;
          arr.push({
            // id: "T-M_" + Math.floor(Math.random() * 999999999).toString(),
            theater_id: theaterId,
            movie_id: movieId,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
      }
    }

    await queryInterface.bulkInsert("Theater_Movies", arr, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Theater_Movies", null, {});
  },
};
