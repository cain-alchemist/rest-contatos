//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schemas
var contacts = new mongoose.Schema({
	name: String,
	phone: String,
	email: String,
	address: String,
	site: String,
	latitude: Number,
	longitude: Number,
	image: String
});

//Returning The Model
module.exports = restful.model('Contacts', contacts);