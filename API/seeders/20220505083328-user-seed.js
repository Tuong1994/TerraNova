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
    const salt = bcryptjs.genSaltSync(10)
    const hashPassword = bcryptjs.hashSync("123456", salt)
    const users = [
      {
        id: `U_000000001`,
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
      const hashPass = bcryptjs.hashSync(`acount_${i}`, salt)
      const user = {
        id: `U_000${i}`,
        account: `acount_${i}`,
        password: hashPass,
        firstName: "First Name",
        lastName: "Last Name",
        email: "user@gmail.com",
        address: "Adress",
        ward: 0,
        district: 0,
        province: 0,
        phone: "Phone",
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
