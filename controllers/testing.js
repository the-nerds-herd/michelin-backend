// UPDATE
// PUT/reviews/:id
router.put('/:id', (req, res, next) => {
	const id = req.params.id;
	const reviewData = req.body;
	Restaurant.findOne(
		{
			'reviews._id': id,
		},
		'reviews'
	)
		.select({ reviews: { $elemMatch: { _id: id } } })
		.then(handleRecordExists)
		// .then((review) => handleValidateOwnership(req, review))
		.then((review) => {
			// const review = restaurant.reviews.id(id);
			review.reviews[0].set(reviewData).save();
			return review;
		})
		.then((review) => res.json(review))
		.catch(next);
});
