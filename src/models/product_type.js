"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class producttype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  producttype.init(
    {
      name: DataTypes.STRING,
      productCode: DataTypes.STRING,
      createdBy: DataTypes.STRING,
      description: DataTypes.TEXT,
      pictures: DataTypes.STRING,
      quantityPerUnit: DataTypes.INTEGER,
      shopCode: DataTypes.STRING,
      unitPrice: DataTypes.INTEGER,
      unitName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "producttype",
    }
  );
  return producttype;
};
