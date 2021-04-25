const mongoose = require('mongoose');

const schema = mongoose.Schema;

// create schema
const menuSchema = new schema({
    name: {
        type: String
    },
    price: {
        type: Number,
    },
    lastModified: {
        type: Date,
        required: true,
        default: Date.now()
    },
    items: {
        type: Array,
    }
});

module.exports = menu = mongoose.model('menu',menuSchema);