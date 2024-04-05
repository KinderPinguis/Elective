import mongoose from "mongoose";

const restaurant = new mongoose.Schema({
    nameRestaurant: {
        type: String,
        required: true
    },
    streetNumber: {
        type: Number,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
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
})

const restaurantModel = mongoose.model('restaurant', restaurant, "restaurant");

export default restaurantModel;