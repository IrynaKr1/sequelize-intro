const { sequelize, Phone } = require('./models');
const { Op } = require('sequelize');

//додавання нового телефону
// (async function () {
//   const newPhone = {
//     brand: 'Apple',
//     model: 'iPhone 17',
//     manufacturedYear: '2026-01-22',
//     ram: 8,
//     cpu: 8,
//     screenSize: 6.2,
//     isNfc: true,
//   };
//   const createdPhone = await Phone.create(newPhone);
//   console.log('createdPhone', createdPhone.get());
// })();
//
//

// отримання списку телефонів
// (* 3-я сторінка при перегляді по 2 телефони на сторінці, упорядкованих за роком виробництва)
// (async function () {
//   const foundPhones = await Phone.findAll({
//     attributes: {
//   exclude: ['createdAt', 'updatedAt'],
// },
//     limit: 2,
//     offset: 4,
//     order: [['manufacturedYear', 'DESC']],
//   });
//   console.log('foundPhones', foundPhones);
// })();

//*отримання списку телефонів поточного року видання,
// (async function () {
//   const foundPhones = await Phone.findAll({
//     raw: true,
//     attributes: {
//       exclude: ['createdAt', 'updatedAt'],
//     },
//     where: sequelize.literal('EXTRACT(YEAR FROM "manufacturedYear") = 2026'),
//   });
//   console.log('foundPhones', foundPhones);
// })();
//
//*отримання списку телефонів старше 2023 року випуску,
// (async function () {
//   const foundPhones = await Phone.findAll({
//     raw: true,
//     attributes: {
//       exclude: ['createdAt', 'updatedAt'],
//     },
//     where: sequelize.literal('EXTRACT(YEAR FROM "manufacturedYear") <= 2023'),
//   });
//   console.log('foundPhones', foundPhones);
// })();
//
//оновлення: змінити розмір оперативної пам'яті телефону з id: 1,
(async function () {
  const updatePhones = await Phone.update(
    {
      ram: 7,
    },
    {
      where: { id: 1 },
    }
  );
  console.log('updatePhones', updatePhones);
})();
