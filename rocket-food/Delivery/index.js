const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const deliveryRoutes = require('./Routes/DeliveryRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGODB_URI || '', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', deliveryRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});