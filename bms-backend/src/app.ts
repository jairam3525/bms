import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// ✅ import routes
import movieRoutes from "./routes/movie.routes";
import bookingRoutes from "./routes/booking.routes";
import authRoutes from "./routes/auth.routes";

dotenv.config();  

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use(cookieParser());
app.use(express.json());

// ✅ routes
app.use("/api/movies", movieRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);

// test route
app.get("/", (_, res) => {
  res.json({
    message: "Welcome to BookMyScreen API",
  });
});

export default app;