const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res, next) => {
	User.find({})
		.then((user) => res.json(user))
		.catch(next);
});

router.post('/', (req, res, next) => {
	User.create(req.body)
		.then((user) => res.json(user))
		.catch(next);
});

module.exports = router;