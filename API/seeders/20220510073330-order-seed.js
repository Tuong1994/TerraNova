"use strict";

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
    const orders_1 = [];
    const orders_2 = [];
    const orders_3 = [];
    const products = [
      {
        price: 2500000,
        amount: 1,
        productName: "ASUS TUF H310-PLUS GAMING",
      },
      {
        price: 3500000,
        amount: 1,
        productName: "Core i3 8100",
      },
      {
        price: 2200000,
        amount: 1,
        productName: "RAM GIGABYTE AORUS RGB (1x16GB)",
      },
      {
        price: 2200000,
        amount: 1,
        productName: "SSD Gigabyte 2.5-Inch SATA III 500GB",
      },
      {
        price: 16500000,
        amount: 1,
        productName: "ASUS RTX2070 8GB",
      },
      {
        price: 1800000,
        amount: 1,
        productName: "PSU GIGABYTE P850B 850W 80PLUS BRONZE",
      },
    ];
    for (let i = 1; i < 20; i++) {
      const order = {
        id: `O_000${i}`,
        note: "",
        totalPay: 28700000,
        paymentType: 1,
        shipmentType: 1,
        shipmentFee: 0,
        shipmentDetail: null,
        status: 1,
        products: JSON.stringify(products),
        userId: `U_000${i}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      orders_1.push(order);
    }
    for (let i = 21; i < 41; i++) {
      const order = {
        id: `O_000${i}`,
        note: "",
        totalPay: 28700000,
        paymentType: 2,
        shipmentType: 1,
        shipmentFee: 0,
        shipmentDetail: null,
        status: 2,
        products: JSON.stringify(products),
        userId: `U_000${i}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      orders_2.push(order);
    }
    for (let i = 42; i < 91; i++) {
      const order = {
        id: `O_000${i}`,
        note: "",
        totalPay: 28700000,
        paymentType: 3,
        shipmentType: 1,
        shipmentFee: 0,
        shipmentDetail: null,
        status: 3,
        products: JSON.stringify(products),
        userId: `U_000${i}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      orders_3.push(order);
    }
    const orderList = orders_1.concat(orders_2, orders_3);

    await queryInterface.bulkInsert("Orders", orderList, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Orders", null, {});
  },
};
