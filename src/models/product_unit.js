"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class productunit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productunit.init(
    {
      updater: DataTypes.STRING,
      unitCode: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      process: DataTypes.STRING,
      productType: DataTypes.STRING,
      isInWarehouse: DataTypes.BOOLEAN,
      shopCode: DataTypes.STRING,
      isOnBlockchain: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "productunit",
    }
  );
  return productunit;
};
