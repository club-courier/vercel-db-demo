const mongoose = require("mongoose");

let isConnected = false; // Track connection state

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(
      "mongodb+srv://clubcourierinternational:Smit123@clubdemo.nrzzh.mongodb.net/?retryWrites=true&w=majority&appName=ClubDemo"
    );
    isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    throw err; // Rethrow the error to handle it where `connectDB` is called
  }
};

// Export the connection function
module.exports = { connectDB };
