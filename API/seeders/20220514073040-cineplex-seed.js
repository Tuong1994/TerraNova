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
      "Cineplexes",
      [
        {
          id: "CPLEX_0001",
          name: "BHDStar",
          logo: "bhd_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "CPLEX_0002",
          name: "CGV",
          logo: "cgv_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "CPLEX_0003",
          name: "CineStar",
          logo: "cinestar_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "CPLEX_0004",
          name: "Galaxy",
          logo: "galaxy_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "CPLEX_0005",
          name: "Lotte Cinema",
          logo: "lotte_logo.png",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "CPLEX_0006",
          name: "MegaGS",
          logo: "mega_logo.png",
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
     await queryInterface.bulkDelete('Cineplexes', null, {});
  },
};
