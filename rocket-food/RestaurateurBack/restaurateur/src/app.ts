import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import RestaurantRouter from "./routes/restaurant.router";
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;
const User = process.env.DB_USER;
const Password = process.env.DB_PASSWORD;
const URI = `mongodb+srv://${User}:${Password}@cluster0.7skuvkx.mongodb.net/restaurant?retryWrites=true&w=majority&appName=Cluster0`

app.listen(PORT, () => {
    console.log(`Le serveur tourne sur ${PORT}`)
})


async function DB_Connect() {
    try {
        await mongoose.connect(URI);
        console.log("Connecté");
    } catch (e) {
        console.error(e);
    }
}

DB_Connect().catch(err => console.log(err));

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/restaurant', RestaurantRouter);
