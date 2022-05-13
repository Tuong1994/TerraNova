"use strict";
const bcryptjs = require("bcryptjs");

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

    const arrFirstName = [
      "Jack",
      "Williams",
      "Jason",
      "Barry",
      "Ken",
      "Kevin",
      "Issac",
      "Leon",
      "Bruce",
      "Clark",
      "Tony",
      "Clint",
      "Steve",
      "John",
      "Chris",
      "Lisa",
      "Anabelle",
      "Elizabeh",
      "Anna",
      "Hannah",
      "Sarah",
      "Tiffany",
      "Christine",
      "Martha",
      "Jill",
      "Claire",
      "Ada",
      "Michelle",
    ];

    const arrLastName = [
      "Johnson",
      "McCoy",
      "Baker",
      "Wayne",
      "Kent",
      "Barton",
      "Warren",
      "Washington",
      "Kenway",
      "Franklin",
      "Olsen",
      "Swan",
      "Turner",
      "Jones",
      "Weasley",
      "Granger",
      "Potter",
      "Nigma",
      "Cobblepot",
      "Stewart",
      "Jordan",
      "Allen",
      "West",
      "Grayson",
      "Todd",
      "Drake",
      "Kane",
      "Gordon",
    ];

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync("123456", salt);
    const users = [
      {
        id: `U_0101`,
        account: `jack1994`,
        password: hashPassword,
        firstName: "Jack",
        lastName: "Ryan",
        email: "jack1994@gmail.com",
        address: "79/24/13 Au Co",
        ward: 14,
        district: 11,
        province: 1,
        phone: "0793228871",
        birthDay: new Date(),
        gender: 1,
        avatar: "",
        role: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    for (let i = 0; i < 100; i++) {
      const hashPass = bcryptjs.hashSync(`acount_${i}`, salt);
      const user = {
        id: `U_000${i}`,
        account: `acount_${i}`,
        password: hashPass,
        firstName: arrFirstName[Math.floor(Math.random() * arrFirstName.length)],
        lastName: arrLastName[Math.floor(Math.random() * arrLastName.length)],
        email: `${arrFirstName[Math.floor(Math.random() * arrFirstName.length)]}@gmail.com`,
        address: "",
        ward: 0,
        district: 0,
        province: 0,
        phone: "",
        birthDay: new Date(),
        gender: 1,
        avatar: "",
        role: "USER",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      users.push(user);
    }

    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
