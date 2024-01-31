"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class manager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  manager.init(
    {
      tokens: DataTypes.STRING,
      role: DataTypes.STRING,
      subordinates: DataTypes.STRING,
      shop: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "manager",
    }
  );
  return manager;
};
