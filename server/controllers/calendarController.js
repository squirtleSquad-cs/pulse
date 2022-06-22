const { useTransition } = require("react");
const User = require("../models/nosqlModel");

// Declare controller object for controller methods
// User is already in DB, username and password sent to the server, server sends that to sql, will check if that exists,
// and if it does exist it'll take whatever mongoDB value corresponds with the user, and
// send that value in the request body over to Mongo DB to request that specific user's interviews array.

const calendarController = {};

// Will return array of userEvents(interviews)
calendarController.getEvents = async (req, res, next) => {
  const { username } = res.cookies;
  try {
    if (username) {
      const interviewArr = await User.findOne({ username });
      res.locals.interviews = interviewArr;
      return next();
    }
  } catch (err) {
    return next({
      log: "Issue with getEvents",
      message: { err: "Fix getEvents method in userController" },
    });
  }
};

calendarController.addEvents = async (req, res, next) => {
  const username = res.cookies;
  const { events } = req.body;
  Data.replaceOne(
    { username: username },
    { username: username, events: events },
    function (err, user) {
      if (err) return next("err in mongo");
      return next();
    }
  );
};

module.exports = calendarController;
