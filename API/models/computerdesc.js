"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ComputerDesc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      // define association here
      this.belongsTo(Product, {
        foreignKey: "productId"
      })
    }
  }
  ComputerDesc.init(
    {
      totalCores: DataTypes.STRING,
      totalThreads: DataTypes.STRING,
      baseFrequency: DataTypes.STRING,
      cache: DataTypes.STRING,
      busSpeed: DataTypes.STRING,
      tdp: DataTypes.STRING,
      socket: DataTypes.STRING,
      chipset: DataTypes.STRING,
      ram: DataTypes.STRING,
      capacity: DataTypes.STRING,
      ramBus: DataTypes.STRING,
      type: DataTypes.STRING,
      size: DataTypes.STRING,
      graphicEngine: DataTypes.STRING,
      videoMemory: DataTypes.STRING,
      cudaCore: DataTypes.STRING,
      memoryInterface: DataTypes.STRING,
      model: DataTypes.STRING,
      outputCapacity: DataTypes.STRING,
      Efficiency: DataTypes.STRING,
      productId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ComputerDesc",
    }
  );
  return ComputerDesc;
};
