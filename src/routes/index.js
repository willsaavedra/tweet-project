const express = require('express');
const app = express();

// Require Routes //
const home = require('./default');
const tweets = require('./tweets');

// Routes //
app.use('/', home);
app.use('/tweets', tweets);

module.exports = app;
