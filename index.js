const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controller(s)

const port = process.env.PORT || 8800;
app.listen(port, () => {
	console.log('⭐ connected to port ' + port);
});
