'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING
      },
      model: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      manufacturedYear: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      ram: {
        type: Sequelize.INTEGER
      },
      cpu: {
        type: Sequelize.INTEGER
      },
      screenSize: {
        type: Sequelize.FLOAT
      },
      isNfc: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Phones');
  }
};