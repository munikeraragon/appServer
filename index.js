var http = require('http')
var bodyParser = require('body-parser');

var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var server = http.createServer(app);

//var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controller/register-controller');



/* route to handle login and registration */
app.post('/api/register',registerController.register);
//app.post('/api/authenticate', authenticateController.authenticate);

server.listen(8000);
