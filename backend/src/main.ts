import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/user_route";
import express, { Application } from "express";
import { pool } from "./controllers/db_connection";
import cookieParser from "cookie-parser";

dotenv.config();
const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/user", router);

async function startServer() {
  // await redisClient.connect();
  console.log("Redis connected");
  await pool.connect();
  console.log("Postgres connected");

  const port = process.env.PORT || 2000;
  console.log(port);

  app.listen(port, () => {
    console.log("Server is running on port", port);
  });
}

startServer();
