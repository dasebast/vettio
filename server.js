// REQUIRE ===============================
var Express = require('express');
var App = Express();
var Session = require('express-session');
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');
var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// CONTROLLERS ===========================




// MIDDLEWARE ============================








App.use(Express.static(__dirname + '/public'));
App.use(BodyParser.json());
App.use(Session({ secret: 'supersecretcode'}));
App.use(Passport.initialize());
App.use(Passport.session());

// AUTHENTICATION ========================



// ENDPOINTS =============================



// CONNECTIONS ===========================
Mongoose.connect('mongodb://localhost:27017/vettio');
App.listen(9009);