const express = require('express');
const app = express();
const cors = require('cors');
const restaurantController = require('./controllers/restaurantController');
const reviewController = require('./controllers/reviewController');
const userController = require('./controllers/userController');
const {
	handleErrors,
	handleValidationErrors,
} = require('./middleware/custom_errors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controller(s)
app.use('/restaurants', restaurantController);
app.use('/restaurants/reviews', reviewController);
app.use('/restaurants/users', userController);

//handle errors
app.use(handleValidationErrors);
app.use(handleErrors);

const port = process.env.PORT || 8800;
app.listen(port, () => {
	console.log('⭐ connected to port ' + port);
});
