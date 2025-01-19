const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    rating: { type: Number, required: true },
    image: { type: String,},
    tags: { type: String, required: true},
    description: { type: String, required: true },
});

module.exports = mongoose.model('Destination', destinationSchema);