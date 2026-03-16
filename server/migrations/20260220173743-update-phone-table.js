'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('Phones', 'phones');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('phones', 'Phones');
  },
};
