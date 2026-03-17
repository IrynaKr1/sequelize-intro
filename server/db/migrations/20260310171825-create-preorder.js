'use strict';

const { STATUS } = require('./../constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('preorders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      order_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM(...STATUS),
      },
      phone_qty: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.REAL,
      },
      phone_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'phones',
          key: 'id',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint('preorders', {
      fields: ['order_date'],
      type: 'check',
      where: {
        order_date: {
          [Sequelize.Op.gte]: Sequelize.literal('CURRENT_DATE'),
        },
      },
    });

    await queryInterface.addConstraint('preorders', {
      fields: ['phone_qty'],
      type: 'check',
      where: {
        phone_qty: {
          [Sequelize.Op.gte]: 0,
        },
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('preorders');
  },
};
