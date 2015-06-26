//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Contact = require('../models/contacts');

//Routes
Contact.methods(['get', 'put', 'post', 'delete']);
Contact.register(router, '/contacts');

//Return Router
module.exports = router;