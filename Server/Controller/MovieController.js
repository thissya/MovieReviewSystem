const { response } = require("express");
const Movie = require("../Model/MovieSchema");
const Review = require("../Model/ReviewSchema");

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (err) {
    return res.status(500).json({ message: "Error in Fetching Movies" });
  }
};

const addMovie = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied. Only admins can add movies." });
    }

    const {
      title,
      description,
      directorName,
      castAndCrew,
      musicDirector,
      producer,
      image,
      genre,
      releaseDate,
    } = req.body;

    const newMovie = new Movie({
      title,
      description,
      directorName,
      castAndCrew,
      musicDirector,
      producer,
      image,
      genre,
      releaseDate,
    });

    await newMovie.save();
    return res.status(201).json({
      message: "Movie added successfully",
      movie: newMovie,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add movie" });
  }
};

const addReview = async (req, res) => {
  try {
    const { movieId, comment, rating } = req.body;
    const review = await Review.create({
      movie: movieId,
      user: req.user._id,
      comment,
      rating,
    });

    return res.status(201).json(review);
  } catch (err) {
    return res.status(500).json({ message: "Error in Adding the Review" });
  }
};

const getMovieByName = async (req, res) => {
  const { name } = req.body;
  try {
    const movies = await Movie.find({ title: { $regex: name, $options: "i" } });
    if (movies.length === 0) {
      return res.status(404).json({ message: "No Movies Found" });
    }
    return res.status(200).json(movie);
  } catch (err) {
    return res.status(500).json({ message: "Error Searching Movie" });
  }
};

const getReviewsByMovie = async (req, res) => {
  const { movieName } = req.params;

  try {
    const movie = await Movie.findOne({
      title: { $regex: movieName, $options: "i" },
    });
    if (!movie) {
      return res.status(404).json({ message: "Movie Not Found" });
    }

    const reviews = await Review.find({ movie: movie._id })
      .populate("User", "userName")
      .populate("Movie", "title");

    return res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error Fetching Reviews" });
  }
};

module.exports = {getAllMovies,getMovieByName,getReviewsByMovie,addReview,addMovie}