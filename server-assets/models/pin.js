var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
var User = require('./user');

var pinSchema = new Schema({
	name: {type: String, required: true},
	image: {type: String, required: true},
	affiliate: {type: String, required: true},
	blurb: {type: String, required: true, maxlength: 300},
	coupon: {type: String},
	tags: [{type: String, required: true}],
	rating: {type: Number, enum: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10], required: true},
	owner: {type: Schema.Types.ObjectId, ref: "User"}

});

module.exports = Mongoose.model('Pin', pinSchema);

// {
// 	"name": "product",
// 	"image": "imgur",
// 	"affiliate": "amazon",
// 	"blurb": "best ever",
// 	"coupon": "dealio",
// 	"tags": ["tech"],
// 	"rating": 8.5,
// 	"owner": "54e507353be290dc088a85a0"
// }