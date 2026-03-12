const { Router } = require('express');
const { phonesController } = require('../controllers');
const { pagination } = require('../middleware');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(pagination.paginatePhone, phonesController.getPhone)
  .post(phonesController.createdPhone);

phonesRouter
  .route('/:id')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhoneById)
  .delete(phonesController.deletePhoneById);

phonesRouter.get('/:id/preorders', phonesController.getPhonesPreorders);

module.exports = phonesRouter;
