// const mongoose = require("mongoose");
// console.log("DB File Loaded Start");
// mongoose
//   .connect(
//     "mongodb+srv://clubcourierinternational:Smit123@clubdemo.nrzzh.mongodb.net/?retryWrites=true&w=majority&appName=ClubDemo"
//   )
//   .then(() => {
//     console.log("MongoDB Connected Succesfully!");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err.message);
//   });
// console.log("DB File Loaded Ending");


const mongoose = require("mongoose");

let isConnected = false; // Track connection state

console.log("DB File Loaded Start");

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(
      "mongodb+srv://clubcosfonal:Smisffs3@clubdemo.nrzzh.mongodb.net/?retryWrites=true&w=majority&appName=ClubDemo"
    );
    isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

connectDB().then(() => console.log("DB File Loaded Ending"));
