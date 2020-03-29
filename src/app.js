const cors = require('cors');
const express = require('express');

const routes = require('./routes');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1', routes);

module.exports = app;
