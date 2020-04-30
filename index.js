/*
 * Module:
 *      API access point
 */


var http = require('http')
var bodyParser = require('body-parser');
var express = require('express');

var app = express(); // create express instance
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var server = http.createServer(app); /// create server instance

/* Registration handler */
var registerController = require('./controller/register-controller');
app.post('/api/register',registerController.register);

/* Authentiaction handler */
var authenticateController = require('./controller/authenticate-controller');
app.post('/api/authenticate', authenticateController.authenticate);

/* Get quetions handler */
var questionsController=require('./controller/question-controller.js');
app.post('/api/questions', questionsController.questions);

/* Publish question controller */
var publishController = require('./controller/publish-controller.js');
app.post('/api/publish', publishController.publish);

server.listen(8000);

