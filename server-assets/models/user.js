var Mongoose = require('mongoose');
var Bcrypt = require('bcrypt-nodejs');
var Q = require('q');

var Schema = Mongoose.Schema;

var userSchema = new Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	kind: {type: String, enum: ['Creator', 'Fan']}
});