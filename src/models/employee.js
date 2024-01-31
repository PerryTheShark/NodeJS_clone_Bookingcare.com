"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee.init(
    {
      shop: DataTypes.STRING,
      superior: DataTypes.STRING,
      tokens: DataTypes.STRING,
      role: DataTypes.STRING,
      isApproved: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "employee",
    }
  );
  return employee;
};
