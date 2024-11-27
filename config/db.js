const mongoose = require("mongoose");

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
