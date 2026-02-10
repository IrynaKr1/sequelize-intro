const { sequelize, Phone } = require('./models');

//додавання нового телефону
// (async function () {
//   const newPhone = {
//     brand: 'Apple',
//     model: 'iPhone 15 Pro Max',
//     manufacturedYear: '2023-09-22',
//     ram: 8,
//     cpu: 6,
//     screenSize: 6.7,
//     isNfc: true,
//   };
//   const createdPhone = await Phone.create(newPhone);
//   console.log('createdPhone', createdPhone.get());
// })();
//
//

// отримання списку телефонів
// (* 3-я сторінка при перегляді по 2 телефони на сторінці, упорядкованих за роком виробництва)
(async function () {
  const foundPhones = await Phone.findAll({
    raw: true,
    exclude: ['createdAt', 'updatedAt'],
    limit: 2,
    offset: 4,
    order: [['manufacturedYear', 'DESC']],
  });
  console.log('foundPhones', foundPhones);
})();
