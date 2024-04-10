const mongoose = require('mongoose');

const { Schema } = mongoose;

const DeliveryHistorySchema = new Schema({
    idClient: String,
    idDriver: String,
    idRestaurant: String,
    price: String,
    distance: String,
    time: String,
});

module.exports = mongoose.model('DeliveryHistory', DeliveryHistorySchema);