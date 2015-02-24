var User = require('./../models/user');
var Pin = require('./../models/pin');

module.exports = {
	userPublic: function(req, res) {
		var responseObject = {};
		User.find({username: req.params.username}).exec().then(function(user){
			console.log(user[0].username);
			responseObject.user = {
				username: user[0].username,
				socialPersonal: user.socialPersonal,
				socialFacebook: user.socialFacebook,
				socialTwitter: user.socialTwitter,
				socialInstagram: user.socialInstagram,
				socialPinterest: user.socialPinterest,
				socialGithub: user.socialGithub,
				socialVine: user.socialVine,
				socialTumblr: user.socialTumblr,
				socialMedium: user.socialMedium,
				socialGoogle: user.socialGoogle
			}
			Pin.find({owner: user[0]._id}).exec().then(function(pins){
				responseObject.pins = pins;
				console.log(responseObject);
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



