const mongoose = require("mongoose");
console.log("DB File Loaded Start");
mongoose
  .connect(
    "mongodb+srv://clubcourierinternational:Smit123@clubdemo.nrzzh.mongodb.net/?retryWrites=true&w=majority&appName=ClubDemo"
  )
  .then(() => {
    console.log("MongoDB Connected Succesfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
console.log("DB File Loaded Ending");
