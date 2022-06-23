const { useTransition } = require("react");
const { User } = require("../models/nosqlModel");

// Declare controller object for controller methods
// User is already in DB, username and password sent to the server, server sends that to sql, will check if that exists,
// and if it does exist it'll take whatever mongoDB value corresponds with the user, and
// send that value in the request body over to Mongo DB to request that specific user's interviews array.

const calendarController = {};

// Will return array of userEvents(interviews)
calendarController.getEvents = (req, res, next) => {
  // const username = req.cookies.username;
  const { username } = req.body;
  // console.log('calendar controller', username)
  // console.log('inside calendar controller')
  
    if (username) {
      // const interviewArr = User.find({ username: username });
     User.find({ username: username },function (err, interviewArr ) {
       if (err) return next({
         log: "Issue with getEvents",
         message: { err: "Fix getEvents method in userController" },
        });
      res.locals.events = interviewArr[0].events;
      // console.log('calendar controller successful')
      // console.log('res locals', res.locals.events)
      return next()
      })
    }
  }

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
