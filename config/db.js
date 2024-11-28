const mongoose = require("mongoose");

let isConnected = false; // Track connection state

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DB_URL);
    isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    throw err; // Rethrow the error to handle it where `connectDB` is called
  }
};

// Export the connection function
module.exports = { connectDB };
