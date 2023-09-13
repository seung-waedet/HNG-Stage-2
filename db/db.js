const mongoose = require('mongoose');
require('dotenv').config();


const MONGODB_URl = process.env.MONGODB_URl;

// connect to mongodb
function connectToMongoDB() {
    mongoose.connect(MONGODB_URl);

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB successfully');
    });

    mongoose.connection.on('error', (err) => {
        console.log('Error connecting to MongoDB', err);
    })
}

module.exports = { connectToMongoDB };