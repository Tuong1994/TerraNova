"use strict";

const { Cineplex, Movie } = require("../models");

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
    const arr = [];
    const cineplexList = await Cineplex.findAll();
    const movieList = await Movie.findAll({
      where: {
        status: 1,
      },
    });

    if (cineplexList && movieList) {
      for (let i = 0; i < cineplexList.length; i++) {
        let cineplexId = cineplexList[i].id;
        for (let j = 0; j < movieList.length; j++) {
          let movieId = movieList[j].id;
          arr.push({
            id: `CX-M_${Math.floor(Math.random() * 999999999).toString()}`,
            cineplex_id: cineplexId,
            movie_id: movieId,
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
      }
    }

    await queryInterface.bulkInsert("Cineplex_Movies", arr, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cineplex_Movies", null, {});
  },
};
