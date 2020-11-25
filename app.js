require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const mongoose = require("mongoose");
const cors = require("cors");



const authRouter = require("./routes/auth");
const profRouter = require("./routes/profile");
const gameRouter = require("./routes/game");


// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.error(err));

var app = express();

// CORS MIDDLEWARE SETUP
app.use(
  cors({
    credentials: true,
    origin: [process.env.PUBLIC_DOMAIN, 'https://tixid.herokuapp.com', 'http://tixid.herokuapp.com'],
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRouter);
app.use("/profile", profRouter);
app.use("/game", gameRouter);

// ROUTE FOR SERVING REACT APP (index.html) 
app.use((req, res) => { // If no routes match, send them the React HTML. 
  res.sendFile(__dirname + "/public/index.html"); }); 


// ERROR HANDLING
// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: "not found" });
});

app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    const statusError = err.status || "500";
    res.status(statusError).json(err);
  }
});

module.exports = app;
