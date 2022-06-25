const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const cookieController = require("../controllers/cookieController");
const calendarController = require("../controllers/calendarController");

router.post(
  "/check",
  loginController.checkLogin,
  calendarController.getEvents,
  cookieController.setCookie,
  (req, res) => {
    res.status(200).json(res.locals.events);
  }
);

router.post(
  "/create",
  loginController.createUser,
  loginController.createMongo,
  (req, res) => {
    return res.status(200).json("User created");
  }
);

module.exports = router;
