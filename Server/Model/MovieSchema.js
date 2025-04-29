const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    directorName: {
      type: String,
      required: true,
    },
    castAndCrew: [{ type: String }],
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
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', movieSchema);
