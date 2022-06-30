require("dotenv").config();

const mongoose = require("mongoose");

function connectDB() {
    // Database Connection 

    mongoose.connect(process.env.MONGO_CONNECTION_URL , {
        useNewUrlParser: true
    });

    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log("Database is connected....");
    })
}

// negi IKNXS3ick14bhde0

module.exports = connectDB;