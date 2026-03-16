const { Router } = require('express');
const { preordersController } = require('../controllers');

const preorderRouter = Router();

preorderRouter.get('/', preordersController.getPreorders);

module.exports = preorderRouter;
