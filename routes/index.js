const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const preorderRouter = require('./preordersRoute');

const router = Router();

router.use('/phones', phonesRouter);
router.use('/preorders', preorderRouter);

module.exports = router;
