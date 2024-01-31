"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class supplychain extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  supplychain.init(
    {
      name: DataTypes.STRING,
      chainCode: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      description: DataTypes.STRING,
      product: DataTypes.STRING,
      process: DataTypes.STRING,
      shopCode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "supplychain",
    }
  );
  return supplychain;
};
