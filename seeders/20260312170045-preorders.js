'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'preorders',
      [
        {
          order_date: '2026-03-13',
          status: 'pending',
          phone_qty: 3,
          phone_id: 7,
          phone_number: 380991234567,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          order_date: '2026-03-12',
          status: 'confirmed',
          phone_qty: 12,
          phone_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          order_date: '2026-03-18',
          status: 'confirmed',
          phone_qty: 1,
          phone_number: 380671234567,
          phone_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          order_date: '2026-03-20',
          status: 'done',
          phone_qty: 4,
          phone_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('preorders', null, {});
  },
};
