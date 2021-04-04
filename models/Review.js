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
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			require: true,
		},
	},
	{
		timestamps: true,
	}
);
module.exports = reviewSchema;
