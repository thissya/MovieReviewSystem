const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  directorName: {
    type: String,
    required: true,
  },
  castAndCrew: [
    { type: String,
      required:true, 
    }
  ],
  musicDirector: {
    type: String,
    required: true,
  },
  producer: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  genre: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
