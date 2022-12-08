'use strict';

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('genres', [
      {
        name: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kids',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Documentary',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('genres', null, {});
  },
};
