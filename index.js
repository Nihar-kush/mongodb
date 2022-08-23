import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello");
});

//MONGODB CONNECTION
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

app.listen(4000, () => {
  connect();
  console.log("connected to server");
});
