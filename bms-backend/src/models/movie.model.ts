import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  genre: [String],       
  rating: Number,
  votes: Number,
  languages: [String],   
  certification: String,
  duration: String,
  posterUrl: String,
  releaseDate: Date,
  description: String,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;