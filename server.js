import express from "express";
import connectDatabase from "./config/db";
import { check, validationResult } from "express-validator";

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
app.post(
  "/api/users",
  [
    check("name", "Enter your name").not().isEmpty(),
    check("password", "Enter a password with 6 or more characters").isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    } else {
      return res.send(req.body);
    }
  }
);

//Connection listener
app.listen(3000, () => console.log("Express server running on port 3000"));
