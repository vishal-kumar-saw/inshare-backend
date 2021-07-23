require('dotenv').config();
const mongoose = require('mongoose');

const dbUrl = process.env.MONGO_CONNECTION_URL;

function connectDB() {
    //Database connection
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log("Database connected");
    });
}
module.exports = connectDB;

