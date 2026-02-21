'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('phones', {
      fields: ['ram'],
      type: 'check',
      where: {
        ram: {
          [Sequelize.Op.and]: [
            { [Sequelize.Op.gt]: 0 },
            { [Sequelize.Op.lte]: 32 },
          ],
        },
      },
      name: 'ram_positive_check',
    });

    await queryInterface.addConstraint('phones', {
      fields: ['cpu'],
      type: 'check',
      where: {
        cpu: {
          [Sequelize.Op.and]: [
            { [Sequelize.Op.gt]: 0 },
            { [Sequelize.Op.lte]: 4000 },
          ],
        },
      },
      name: 'cpu_positive_check',
    });

    await queryInterface.sequelize.query(`
      ALTER TABLE phones 
      ADD CONSTRAINT year_check 
      CHECK (manufactured_year <= CURRENT_DATE)
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('phones', 'ram_positive_check');
    await queryInterface.removeConstraint('phones', 'cpu_positive_check');
    await queryInterface.removeConstraint('phones', 'year_check');

  },
};
