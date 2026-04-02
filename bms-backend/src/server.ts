import app from "./app";
import connectDB from "./utils/db";

const startServer = async () => {
  const port = 9000;

  await connectDB(); // 🔥 ADD THIS

  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
};

startServer();