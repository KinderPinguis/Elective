import mongoose from "mongoose";
import {ObjectId} from "mongodb";

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
        type: ObjectId,
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
        type: [String],
        required: true
    }
})

const restaurantModel = mongoose.model('restaurant', restaurant, "restaurant");

export default restaurantModel;