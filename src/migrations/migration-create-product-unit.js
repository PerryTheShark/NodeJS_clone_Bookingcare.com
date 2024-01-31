"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("product_units", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      updater: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unitCode: {
        type: Sequelize.STRING,
      },
      createdBy: {
        type: Sequelize.STRING,
      },
      process: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isInWarehouse: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      shopCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isOnBlockchain: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable("product_units");
  },
};
