'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('preorders', 'status', {
      type: Sequelize.ENUM('pending', 'confirmed', 'done'),
      defaultValue: 'pending',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('preorders', 'status', {
      type: Sequelize.ENUM('pending', 'confirmed', 'done'),
      defaultValue: null,
    });
  },
};
