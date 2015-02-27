var Mongoose = require('mongoose');
var Bcrypt = require('bcrypt-nodejs');
var Q = require('q');

var Schema = Mongoose.Schema;

var userSchema = new Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	username: {type: String, required: true, unique: true},
	description: {type: String},
	avatar: {type: String},
	banner: {type: String},
	dateCreated: {type: Date, default: Date.now},
	socialPersonal: {type: String},
	socialFacebook: {type: String},
	socialTwitter: {type: String},
	socialInstagram: {type: String},
	socialPinterest: {type: String},
	socialGithub: {type: String},
	socialVine: {type: String},
	socialTumblr: {type: String},
	socialGit: {type: String},
	socialMedium: {type: String},
	socialGoogle: {type: String}
});

userSchema.pre('save', function(next) {
	var user = this;
		// console.log("00000001");
	if(!user.isModified('password')) {
		return next();
	}
	// console.log("00000002");
	Bcrypt.genSalt(12, function(err, salt) {
		// console.log("00000003");
		if (err) {
			return next(err);
		}
		// console.log("00000004");
		Bcrypt.hash(user.password, salt, null, function(err, hash) {
			// console.log("00000005");
			user.password = hash;
			return next();
		});
	});
});

userSchema.methods.comparePassword = function(pass) {
	var deferred = Q.defer();
	Bcrypt.compare(pass, this.password, function(err, isMatch) {
		if(err) {
			deferred.reject(err);
		}
		else {
			deferred.resolve(isMatch);
		}
	});
	return deferred.promise;
};

module.exports = Mongoose.model('User', userSchema);

