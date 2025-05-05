const express = require("express");
const router = express.Router();

const {
  addMovie,
  addReview,
  getAllMovies,
  getMovieByName,
  getReviewsByMovie,
} = require("../Controller/MovieController");

const { registerUser, userLogin,requestOtp } = require("../Controller/authController");

const { protect, admin } = require("../Middleware/authMiddleware");

router.post("/register", registerUser);
router.post('/login', userLogin);

router.post('/request-otp',requestOtp);

router.post("/add/movie", protect, admin, addMovie);

router.get("/home",protect, getAllMovies);
// router.get("/home/search",protect, getMovieByName);
router.get("/home/movie/reviews",protect, getReviewsByMovie);
router.post("/home/movie/review", protect, addReview);

module.exports = router;
