"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("producttypes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      productCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdBy: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      pictures: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      quantityPerUnit: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      shopCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      unitPrice: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      unitName: {
        allowNull: true,
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
    await queryInterface.dropTable("producttypes");
  },
};
