// ============================ REQUIRE ===============================
var Express = require('express');
var App = Express();
var Session = require('express-session');
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');
var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('./server-assets/models/user');
var Pin = require('./server-assets/models/pin');
var PinCtrl = require('./server-assets/controllers/pin-ctrl');

// ============================ CONTROLLERS ===========================




// ============================ MIDDLEWARE ============================
	// +++ Passport -- Configure +++
Passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(username, password, done) {     // How all does this work?
	// console.log(username, password);
	User.findOne({email: username}).exec().then(function(user) {
		if(!user) {
			return done(null, false, {message: 'Incorrect username.'});
		}
		user.comparePassword(password).then(function(isMatch) {
			if(!isMatch) {
				return done(null, false, {message: 'Incorrect password.'});
			}
			return done(null, user);
		});
	});
}));

Passport.serializeUser(function(user, done) {
	done(null, user);
});

Passport.deserializeUser(function(obj, done) {
	done(null, obj);
});
	// +++ END Passport -- Configure +++


App.use(Express.static(__dirname + '/public'));
App.use(BodyParser.json());
App.use(Session({ secret: 'supersecretcode'}));
App.use(Passport.initialize());
App.use(Passport.session());


// ============================ AUTHENTICATION ========================
App.post('/api/auth', Passport.authenticate('local'), function(req, res) {
	return res.status(200).end();
});

App.post('/api/register', function(req, res) {
	var newUser = new User(req.body);
	newUser.save(function(err, user) {
		if(err) {
			return res.status(500).end();
		}
		return res.json(user);
	});
});

var isAuthed = function(req, res, next) {
	console.log(req.isAuthenticated());
	if(!req.isAuthenticated()) {
		return res.status(403).end();
	}
	return next();
};


// ============================ ENDPOINTS =============================
// App.get('/api/test', isAuthed, function(req, res) {
// 	console.log(req.user);
// 	res.status(200).json("endpt worked");
// });

App.get("/api/getUserData/:id", isAuthed, function(req, res){
	console.log(req.params.id);
	//User model to find user and compare logged in user with found user
	//coma[pre logged in user name to user i just pulled up and see if they are the same]
	//req.user.<id> 
});

App.get("/api/pins", PinCtrl.list);
App.post("/api/pins", PinCtrl.create); // Wait till frontend done for isAuthed **************
// App.put("/api/pins/:id", isAuthed, PinCtrl.edit);



// CONNECTIONS ===========================
Mongoose.connect('mongodb://localhost:27017/vettio');
App.listen(9009);