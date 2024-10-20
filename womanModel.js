const mongoose = require('mongoose');

const womanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true

    },
    quote: {
        type: String,
        required: false
    },
    minibio: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('diva', womanSchema);