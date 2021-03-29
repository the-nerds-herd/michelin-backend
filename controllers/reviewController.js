const express = require('express');
const router = express.Router();

// require restaurant model
const Restaurant = require('../models/Restaurant');

// CREATE
// POST /reviews/
router.post('/', (req, res, next) => {
	// get the review data from the body of the request
	const reviewData = req.body;
	// get the restaurant id from the body
	const restaurantId = reviewData.restaurantId;
	// find the restaurant by its id
	Restaurant.findById(restaurantId)
		.then((restaurant) => {
			// add review to restaurant
			restaurant.reviews.push(reviewData);
			// save restaurant
			return restaurant.save();
		})
		// send responsne back to client
		.then((restaurant) => res.status(201).json({ restaurant: restaurant }))
		.catch(next);
});

// DESTROY
// DELETE /reviews/:id
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Restaurant.findOne({ 'reviews._id': id })
		.then((restaurant) => {
			restaurant.reviews.id(id).remove();
			return restaurant.save();
		})
		.then(() => res.sendStatus(204))
		.catch(next);
});

// UPDATE
// PATCH /reviews/:id
router.patch('/:id', (req, res, next) => {
	const id = req.params.id;
	const reviewData = req.body;

	Restaurant.findOne({
		'reviews._id': id,
	})
		.then((restaurant) => {
			const review = restaurant.reviews.id(id);
			review.set(reviewData);
			return restaurant.save();
		})
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
