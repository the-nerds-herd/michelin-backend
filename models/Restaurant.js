const mongoose = require('../db/connection');
const review = require('./Review');
const restaurantSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		openingHours: {
			type: String,
			required: true,
		},
		website: { type: String, required: true },
		Phone: String,
		introduction: { type: String, required: true },
		starNumber: { type: Number, required: true },
		address: { type: String, required: true },
		menue: { type: String, required: true },
		restaurantImg: { type: String, required: true },
		dishImgOne: { type: String, required: true },
		dishImgTwo: { type: String, required: true },
		reviews: [reviewSchema],
	},
	{
		timestamps: true,
	}
);
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;
