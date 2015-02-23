var Mongoose = require('mongoose');
var Bcrypt = require('bcrypt-nodejs');
var Q = require('q');

var Schema = Mongoose.Schema;

var userSchema = new Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	name: {type: String, required: true, unique: true}
	// kind: {type: String, enum: ['Creator', 'Fan']}
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

