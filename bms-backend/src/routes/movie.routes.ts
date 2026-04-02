import express from "express";
import Movie from "../models/movie.model";

const router = express.Router();

// GET all movies
router.get("/", async (_, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// 🔥 GET single movie by ID
router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

export default router;