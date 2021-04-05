const seedData = require('./seeds.json');
const Restaurant = require('../models/Restaurant');

Restaurant.deleteMany({})
	.then(() => {
		Restaurant.insertMany(seedData).then((restaurant) => {
			console.log(restaurant);
			process.exit();
		});
	})
	.catch((err) => console.log(err));
