const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api', vehicleRoutes);

const dbURI = 'mongodb://grupofmo.com:27017/vehicleDBAnthonyEspana';
mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
