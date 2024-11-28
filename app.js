const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const path = require("path");

const hbs = require("hbs");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const { connectDB } = require("./config/db");
const NameModel = require("./models/add_name");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/success", async (req, res) => {
  const { name } = req.query;

  try {
    await connectDB();
    console.log("Database connected successfully.");

    const newName = new NameModel({ name });
    await newName.save();
    console.log("Name added to DB:", name);
    res.render("home", { message: `Name "${name}" added successfully!` });
  } catch (err) {
    console.error("Error saving name:", err.message);
    res.render("home", { message: "Failed to save name. Please try again." });
  }
});

module.exports = app;
