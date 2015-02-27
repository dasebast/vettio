var User = require('./../models/user');
var Pin = require('./../models/pin');

module.exports = {
	userPublic: function(req, res) {
		var responseObject = {};
		User.find({username: req.params.username}).exec().then(function(user){
			// console.log(user[0].username);
			responseObject.user = {
				username: user[0].username,
				description: user[0].description,
				avatar: user[0].avatar,
				banner: user[0].banner,
				dateCreated: user[0].dateCreated,
				socialPersonal: user[0].socialPersonal,
				socialFacebook: user[0].socialFacebook,
				socialTwitter: user[0].socialTwitter,
				socialInstagram: user[0].socialInstagram,
				socialPinterest: user[0].socialPinterest,
				socialGithub: user[0].socialGithub,
				socialVine: user[0].socialVine,
				socialTumblr: user[0].socialTumblr,
				socialMedium: user[0].socialMedium,
				socialGoogle: user[0].socialGoogle
			}
			Pin.find({owner: user[0]._id}).exec().then(function(pins){
				responseObject.pins = pins;
				// console.log(responseObject);
				res.json(responseObject)
			}, function(error){
				res.status(500).json(error)
			})
		}, function(err){
			res.status(500).json(err);
		})
	} // end userPublic

};

		// the response object above will look something like this once it is sent back
		// responseObject = {
		// 	user: {
		// 		socialLinks:
		// 	},
		// 	pins: [{}]
		// }



