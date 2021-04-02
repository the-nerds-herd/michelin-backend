const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.get('/', (req, res, next) => {
	User.find({})
		.then((user) => res.json(user))
		.catch(next);
});

//Sign up
router.post('/signup', (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => ({ name: req.body.name, password: hash }))
		.then((user) => User.create(user))
		.then((user) => res.status(201).json(user))
		.catch(next);
});

module.exports = router;

//Sign in
router.post('/signin', (req, res, next) => {});
