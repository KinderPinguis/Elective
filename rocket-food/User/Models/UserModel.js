const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    type: String,
    firstName: String,
    middleName: String,
    lastName: String,
    gender: String,
    birthday: Date,
    streetAddress: String,
    city: String,
    country: String,
    tel: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', UserSchema);
