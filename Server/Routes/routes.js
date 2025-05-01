const express = require('express');
const router = express.Router();

const {
  addMovie,
  addReview,
  getAllMovies,
  getMovieByName,
  getReviewsByMovie
} = require('../Controller/MovieController');

const {
  registerUser,
  userLogin
} = require('../Controller/authController');

const {
  protect,
  admin
} = require('../Middleware/authMiddleware');


router.post('/register', registerUser);  
router.post('/login', userLogin);         


router.post('/add/movie', protect, admin, addMovie); 

router.get('/home', getAllMovies);                 
router.get('/home/search', getMovieByName);        
router.get('/home/:movie/reviews', getReviewsByMovie); 
router.post('/home/:movie/review', protect, addReview); 

module.exports = router;
