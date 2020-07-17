import express from "express";
import connectDatabase from "./config/db";

//Init express app
const app = express();

//Connect dB
connectDatabase();

// configure middleware
app.use(express.json({ extended: false }));

//Api endpoints
/**
 * @route GET /
 * @desc Test endpoint
 */
app.get("/", (req, res) =>
  res.send("http get request sent to root api endpoint")
);

/**
 * @route POST api/users
 * @desc Register User
 */
app.post("/api/users", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//Connection listener
app.listen(3000, () => console.log("Express server running on port 3000"));
