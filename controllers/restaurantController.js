const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

router.get('/', (req, res, next) => {
	Restaurant.find()
		.populate('reviews.owner', 'name')
		.then((restaurants) => res.json(restaurants))
		.catch(next);
});

// SHOW
// GET /restaurants/:id
router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	Restaurant.findById(id)
		.populate('reviews.owner')
		.then((restaurant) => res.json(restaurant))
		.catch(next);
});

module.exports = router;
