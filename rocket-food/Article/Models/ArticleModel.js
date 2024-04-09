const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArticleSchema = new Schema({
    idRestaurant: String,
    price: String,
});

module.exports = mongoose.model('Article', ArticleSchema);
