const express = require('express');
const app = express();
const cors = require('cors');
const restaurantController = require('./controllers/restaurantController');
const reviewController = require('./controllers/reviewController');
const userController = require('./controllers/userController');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/restaurants', restaurantController);
app.use('/restaurants/reviews', reviewController);
app.use('/restaurants/users', userController);


const port = process.env.PORT || 8800;
app.listen(port, () => {
	console.log('⭐ connected to port ' + port);
});
