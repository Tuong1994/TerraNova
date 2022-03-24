"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("PcSpecs", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      totalCores: {
        type: Sequelize.STRING,
      },
      totalThreads: {
        type: Sequelize.STRING,
      },
      baseFrequency: {
        type: Sequelize.STRING,
      },
      cache: {
        type: Sequelize.STRING,
      },
      busSpeed: {
        type: Sequelize.STRING,
      },
      tdp: {
        type: Sequelize.STRING,
      },
      socket: {
        type: Sequelize.STRING,
      },
      chipset: {
        type: Sequelize.STRING,
      },
      ram: {
        type: Sequelize.STRING,
      },
      capacity: {
        type: Sequelize.STRING,
      },
      ramBus: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      graphicEngine: {
        type: Sequelize.STRING,
      },
      videoMemory: {
        type: Sequelize.STRING,
      },
      cudaCore: {
        type: Sequelize.STRING,
      },
      memoryInterface: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      outputCapacity: {
        type: Sequelize.STRING,
      },
      Efficiency: {
        type: Sequelize.STRING,
      },
      productId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("PcSpecs");
  },
};
