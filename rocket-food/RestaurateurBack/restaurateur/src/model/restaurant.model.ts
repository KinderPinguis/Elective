import mongoose from "mongoose";

const restaurant = new mongoose.Schema({
    nameRestaurant: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    categories: {
        type: String,
        required: true
    }
})

const restaurantModel = mongoose.model('restaurant', restaurant, "restaurant");

export default restaurantModel;