"use strict";

const {
  showTimeArr1,
  showTimeArr2,
  showTimeArr3,
  showTimeArr4,
  showTimeArr5,
  showTimeArr6,
  showTimeArr7,
  showTimeArr8,
  showTimeArr9,
  showTimeArr10,
  showTimeArr11,
  showTimeArr12,
  showTimeArr13,
  showTimeArr14,
  showTimeArr15,
  showTimeArr16,
} = require("../interface/movie");
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

    const newArr1 = [];
    const newArr2 = [];
    const newArr3 = [];
    const newArr4 = [];
    const newArr5 = [];
    const newArr6 = [];
    const newArr7 = [];
    const newArr8 = [];
    const newArr9 = [];
    const newArr10 = [];
    const newArr11 = [];
    const newArr12 = [];
    const newArr13 = [];
    const newArr14 = [];
    const newArr15 = [];
    const newArr16 = [];

    const theaterList = await Theater.findAll();
    const movieList = await Movie.findAll({
      where: {
        status: 1,
      },
    });

    const getScheduleList = (list, newArr) => {
      for (let i = 0; i < theaterList.length; i++) {
        let theaterId = theaterList[i].id;
        let newSchedule = {
          id: "MS_" + Math.floor(Math.random() * 999999999).toString(),
          showTime: "",
          movieId: "",
          theaterId: theaterId,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        for (let j = 0; j < movieList.length; j++) {
          let movieId = movieList[j].id;
          for (let l = 0; l < list.length; l++) {
            let showTime = list[l];
            let temp = { ...newSchedule, movieId: movieId, showTime: showTime };
            newArr.push(temp);
          }
        }
      }
    }

    if (theaterList && movieList) {
      getScheduleList(showTimeArr1, newArr1);
      getScheduleList(showTimeArr2, newArr2);
      getScheduleList(showTimeArr3, newArr3);
      getScheduleList(showTimeArr4, newArr4);
      getScheduleList(showTimeArr5, newArr5);
      getScheduleList(showTimeArr6, newArr6);
      getScheduleList(showTimeArr7, newArr7);
      getScheduleList(showTimeArr8, newArr8);
      getScheduleList(showTimeArr9, newArr9);
      getScheduleList(showTimeArr10, newArr10);
      getScheduleList(showTimeArr11, newArr11);
      getScheduleList(showTimeArr12, newArr12);
      getScheduleList(showTimeArr13, newArr13);
      getScheduleList(showTimeArr14, newArr14);
      getScheduleList(showTimeArr15, newArr15);
      getScheduleList(showTimeArr16, newArr16);
    }
    const arr = newArr1.concat(
      newArr2,
      newArr3,
      newArr4,
      newArr5,
      newArr6,
      newArr7,
      newArr8,
      newArr9,
      newArr10,
      newArr11,
      newArr12,
      newArr13,
      newArr14,
      newArr15,
      newArr16
    );
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