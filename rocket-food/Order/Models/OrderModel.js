const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
    idRestaurant: String,
    idClient: String,
    idDriver: String,
    price: String,
});

module.exports = mongoose.model('Order', OrderSchema);
