const { Router } = require('express');
const { phonesController } = require('../controllers');
const { pagination, upload } = require('../middleware');

const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(pagination.paginatePhone, phonesController.getPhone)
  .post(upload.uploadPhoneImage, phonesController.createdPhone);

phonesRouter
  .route('/:id')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhoneById)
  .delete(phonesController.deletePhoneById);

phonesRouter
  .route('/:id/preorders')
  .get(phonesController.getPhonesPreorders)
  .post(phonesController.createPhonePreorder);

phonesRouter.patch(
  '/:id/images',
  upload.uploadPhoneImage,
  phonesController.updatePhoneImage
);

module.exports = phonesRouter;
