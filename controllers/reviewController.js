const express = require('express');
const router = express.Router();

// require restaurant model
const Restaurant = require('../models/Restaurant');
const {
	handleValidateId,
	handleRecordExists,
	handleValidateOwnership,
} = require('../middleware/custom_errors');
const { requireToken } = require('../middleware/auth');

// CREATE
// POST /reviews/
router.post('/', requireToken, (req, res, next) => {
	// get the review data from the body of the request
	const reviewData = req.body;
	reviewData.owner = req.user._id;
	// get the restaurant id from the body
	const restaurantId = reviewData.restaurantId;
	// find the restaurant by its id
	Restaurant.findById(restaurantId)
		.then((restaurant) => {
			// restaurant.review;
			// add review to restaurant
			restaurant.reviews.push(reviewData);
			// save restaurant
			return restaurant.save();
		})
		// send responsne back to client
		.then((restaurant) => res.status(201).json({ restaurant }))
		.catch(next);
});

// DESTROY
// DELETE /reviews/:id
router.delete('/:id', handleValidateId, requireToken, (req, res, next) => {
	const id = req.params.id;
	Restaurant.findOne({ 'reviews._id': id })
		.then(handleRecordExists)
		.then((restaurant) => {
			const output = handleValidateOwnership(req, restaurant, id);
			return output;
		})
		.then((output) => {
			output.reviews.id(id).remove();
			return output.save();
		})
		.then(() => res.sendStatus(204))
		.catch(next);
});

// UPDATE
// PUT/reviews/:id
router.put('/:id', handleValidateId, requireToken, (req, res, next) => {
	const id = req.params.id;
	const reviewData = req.body;

	Restaurant.findOne({
		'reviews._id': id,
	})
		.then(handleRecordExists)
		.then((restaurant) => {
			// const review = restaurant.reviews.id(id);
			const output = handleValidateOwnership(req, restaurant, id);
			return output;
		})
		.then((output) => {
			// console.log(output);
			const review = output.reviews.id(id);

			review.set(reviewData);
			console.log(review);
			return output.save();
		})
		.then((restaurant) => res.json(restaurant))
		.catch(next);
});

module.exports = router;
