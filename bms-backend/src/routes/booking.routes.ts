import express from "express";
import mongoose from "mongoose";
import Booking from "../models/booking.model";

const router = express.Router();

// ✅ Save booking
router.post("/", async (req: any, res: any) => {
  try {
    const { movieId, seats, showTime, total } = req.body;

    if (!movieId) {
      return res.status(400).json({ error: "movieId missing" });
    }

    const booking = await Booking.create({
      movieId,
      seats,
      showTime,
      total,
    });

    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Booking failed" });
  }
});

// ✅ Get booked seats
router.get("/:movieId/:showTime", async (req: any, res: any) => {
  try {
    const { movieId, showTime } = req.params;

    if (!mongoose.Types.ObjectId.isValid(movieId)) {
      return res.json([]);
    }

   const bookings = await Booking.find({
  movieId,
  showTime: { $regex: new RegExp(`^${showTime}$`, "i") },
});

    const bookedSeats = bookings.flatMap((b) => b.seats);

    res.json(bookedSeats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching seats" });
  }
});
export default router;