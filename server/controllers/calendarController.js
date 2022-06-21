const User = require ('../models/nosqlModel')

// Declare controller object for controller methods
// User is already in DB, username and password sent to the server, server sends that to sql, will check if that exists, 
// and if it does exist it'll take whatever mongoDB value corresponds with the user, and 
// send that value in the request body over to Mongo DB to request that specific user's interviews array. 

const userController = {};

// Will return array of userEvents(interviews)
userController.getEvents = async (req, res, next) => {
  const { value } = req.body;
  try {
    if (value) {
      const interviewArr = await User.findOne({value})
      res.locals.interviews = interviewArr;
      return next()
    }
  } catch(err) {
    return next ({
        log: 'Issue with getEvents',
        message: {err: 'Fix getEvents method in userController'}
    })
  }}


module.exports = userController;