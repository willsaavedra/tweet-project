const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');


const router = express.Router();
// middleware
const middleware = require('./middlewares/authToken');
// middleware logging //
var accessLogStream = fs.createWriteStream(path.join(__dirname, '/var/log/access.log'), { flags: 'a' });
const time = Date.now() / 100
app.use(morgan(`{"app_name": "tweet-api", "type": "request_log", "app_name": "tweet-api", "user_agent": ":user-agent", "date": ":date[clf]", "status": :status, "timestamp": ${time}, "response_time": :response-time, "method": ":method", "url": ":url", "remote_addr": ":remote-addr"}`, { stream: accessLogStream }));
//app.use(morgan(`{"user_agent": ":user-agent", "date": ":date[clf]", "status": :status, "timestamp": ${time}, "response_time": :response-time, "method": ":method", "url": ":url", "remote_addr": ":remote-addr"}`))
// Routes //
const routes = require('./routes');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// API Middleware
//app.use('/api/comment',middleware);
// API functions
app.use('/api/',routes);
module.exports = app;