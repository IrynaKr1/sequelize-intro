const { Router } = require('express');
const { phonesController } = require('../controllers');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(phonesController.getPhone)
  .post(phonesController.createdPhone);

phonesRouter
  .route('/:id')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhoneById)
  .delete(phonesController.deletePhoneById);

module.exports = phonesRouter;
