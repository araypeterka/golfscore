import express from "express";
import connectDatabase from "./config/db";

//Init express app
const app = express();

//Connect dB
connectDatabase();

//Api endpoints
app.get("/", (req, res) =>
  res.send("http get request sent to root api endpoint")
);

//Connection listener
app.listen(3000, () => console.log("Express server running on port 3000"));
