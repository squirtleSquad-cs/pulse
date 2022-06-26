const express = require("express");
const path = require("path");
const PORT = 3000;
const mongoose = require("mongoose");
const app = express();

const calendarRouter = require("./routes/calendarRouter");
const loginRouter = require("./routes/loginRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("../index.html"));
app.use('/calendar', calendarRouter);
app.use('/login', loginRouter);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Individual Error Handling
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// Global Error Handling
app.use((err, req, res, next) => {
  const defaultError = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: "Generic message error",
  };
  const errorObj = Object.assign(defaultError, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

module.exports = app;
