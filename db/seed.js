//Require the data
const seedData = require('./seeds.json');

// Require the model
const Restaurant = require('../models/Restaurant');

//Delete all of the data and insert all data
Restaurant.deleteMany({})
	.then(() => {
		Restaurant.insertMany(seedData).then((restaurant) => {
			console.log(restaurant);
			process.exit();
		});
	})
	.catch((err) => console.log(err));
