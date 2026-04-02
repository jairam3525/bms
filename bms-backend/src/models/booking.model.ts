import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  seats: [String],
  showTime: String,
  total: Number,
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;