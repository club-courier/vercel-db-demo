const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const NameModel = mongoose.model("Name", nameSchema);

module.exports = NameModel;
