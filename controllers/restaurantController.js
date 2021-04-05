const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const {
	handleValidateId,
	handleRecordExists,
} = require('../middleware/custom_errors');

router.get('/', (req, res, next) => {
	Restaurant.find()
		.populate('reviews.owner')
		.then((restaurants) => res.json(restaurants))
		.catch(next);
});

// SHOW
// GET /restaurants/:id
router.get('/:id', handleValidateId, (req, res, next) => {
	const id = req.params.id;
	Restaurant.findById(id)
		.populate('reviews.owner')
		.then(handleRecordExists)
		.then((restaurant) => res.json(restaurant))
		.catch(next);
});

module.exports = router;
