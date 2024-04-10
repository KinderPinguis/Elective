const mongoose = require('mongoose');

const { Schema } = mongoose;

const MenuSchema = new Schema({
    idRestaurant: String,
    price: String,
});

module.exports = mongoose.model('Menu', MenuSchema);
