var Pin = require('./../models/pin');

module.exports = {
	list: function(req, res) {
		// console.log(req.user);
		Pin.find({ owner: req.user._id }).exec().then(function(pins) {
			return res.json(pins);
		});
	},
	create: function(req, res) {
		// console.log("hello10");
		req.body.owner = req.user._id;
		var newPin = new Pin(req.body);
		// newPin.owner = req.user._id;
		newPin.save(function(err, pin) {
			if(err) {
				console.log(err);
				return res.status(500).end();
			}
			return res.json(pin);
		});
	},
	edit: function(req, res) {
		Pin.update({ _id: req.params.id }, req.body).exec(function(err) {
				return res.status(200).end();
			});
	}
};























// module.exports = {
// 	post: post,
// 	get: get,
// 	remove: remove
// }


// var post = function(){

// }

// var get = function(){

// }

// var remove = function(){

// }
