import express from "express";
import User from "../models/user.model";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;

    // check existing user
    const existing = await User.findOne({ email });
    if (existing) {
      return res.json({ error: "User already exists" });
    }

    const user = await User.create({ name, email, password });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Signup failed" });
  }
});
// LOGIN
router.post("/login", async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

router.get("/login", (req, res) => {
  res.send("Login route working");
});
export default router;