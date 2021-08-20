const mongoose = require("mongoose");

const repositorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  html_url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    //required: true,
    default: "Aprašymas",
  },
  language: {
    type: String,
    //required: true,
    default: "Kalba",
  },
});

module.exports = mongoose.model("Repository", repositorySchema);
