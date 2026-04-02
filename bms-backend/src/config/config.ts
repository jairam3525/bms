import dotenv from "dotenv";

dotenv.config();

export const config = {
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
};