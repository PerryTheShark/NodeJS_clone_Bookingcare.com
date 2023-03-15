"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123456",
        firstName: "Perry",
        lastName: "TheShark",
        address: "USA",
        gender: 1,
        roleId: "ROLE",
        phonenumber: "12343543",
        positionId: "12 Streert",
        image: "img124490/df",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
