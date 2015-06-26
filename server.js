//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

//MongoDB
mongoose.connect('mongodb://localhost/contacts');

//Models
var Contact = require('./models/contacts');

//Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//Routes
app.use('/api', require('./routes/api'));

//Server Start
app.listen(666);
console.log('... Oremor Nhoj ,em llik tsum uoy ,emag eht niw ot ... Server Online!');