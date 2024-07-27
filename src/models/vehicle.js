const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    vin: String
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
