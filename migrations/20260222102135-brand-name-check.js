'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('phones', {
      fields: ['brand'],
      type: 'check',
      where: {
        brand: {
          [Sequelize.Op.regexp]: '^[A-Z].{2,24}$',
        },
      },
      name: 'brand_name_check',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('phones', 'brand_name_check');
  },
};
