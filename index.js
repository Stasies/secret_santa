import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import groupRoute from "./routes/groups.js";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};
app.use(cors());
app.use(express.json());
// app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/groups", groupRoute);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || 500;

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});
app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
