"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shop.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      introduction: DataTypes.STRING,
      shopCode: DataTypes.STRING,
      image: DataTypes.STRING,
      owner: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "shop",
    }
  );
  return shop;
};
