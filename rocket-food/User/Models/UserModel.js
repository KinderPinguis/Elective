const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    gender: String,
    dobYear: String,
    dobMonth: String,
    dobDate: String,
    streetAddress: String,
    city: String,
    country: String,
    tel: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User', UserSchema);
