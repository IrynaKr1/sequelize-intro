'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      'phones',
      'manufacturedYear',
      'manufactured_year'
    );
    await queryInterface.renameColumn('phones', 'screenSize', 'screen_size');
    await queryInterface.renameColumn('phones', 'isNfc', 'is_nfc');
    await queryInterface.renameColumn('phones', 'createdAt', 'created_at');
    await queryInterface.renameColumn('phones', 'updatedAt', 'updated_at');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      'phones',
      'manufactured_year',
      'manufacturedYear'
    );
    await queryInterface.renameColumn('phones', 'screen_size', 'screenSize');
    await queryInterface.renameColumn('phones', 'is_nfc', 'isNfc');
    await queryInterface.renameColumn('phones', 'created_at', 'createdAt');
    await queryInterface.renameColumn('phones', 'updated_at', 'updatedAt');
  },
};
