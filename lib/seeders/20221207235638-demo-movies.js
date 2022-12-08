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

    await queryInterface.bulkInsert('movies', [
      {
        title: 'The Notebook',
        description: 'A cool movie!',
        image: 'No image available!',
        releaseYear: 1931,
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Spiderman',
        description: 'Another cool movie!',
        image: 'No image available!',
        releaseYear: 3000,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Step Brothers',
        description: 'Yet another cool movie!',
        image: 'No image available!',
        releaseYear: 9,
        genre_id: 3,
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
    await queryInterface.bulkDelete('movies', null, {});
  },
};
