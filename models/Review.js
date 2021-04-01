const mongoose = require('../db/connection');
const reviewSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		reviewer: {
			type: String,
			required: true,
		},
		rating: String,
		// reviewerId: {
		// 	type: mongoose.Schema.Types.ObjectId,
		// },
	},
	{
		timestamps: true,
	}
);
module.exports = reviewSchema;
