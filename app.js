const express = require('express');
const { errorHandlers } = require('./middleware');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/api', router);

// Add endpoints handlers

// POST /api/phones {}
// GET /api/phones
// GET /api/phones/1
// PATCH /api/phones/1 {}
// DELETE /api/phones/1

app.use(errorHandlers.errorHandler);

module.exports = app;
