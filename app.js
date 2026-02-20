const express = require('express');
const { errorHandlers } = require('./middleware');

const app = express();

app.use(express.json());

// Add endpoints handlers

// POST /api/phones {}
// GET /api/phones
// GET /api/phones/1
// PATCH /api/phones/1 {}
// DELETE /api/phones/1

app.use(errorHandlers.errorHandler);

module.exports = app;
