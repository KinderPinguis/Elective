const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const menuRoutes = require('./Routes/MenuRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGODB_URI || '', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', menuRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
