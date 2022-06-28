const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController')


// Get request from Root to acquire all interviews/user events corresponding to user
router.get('/', calendarController.getEvents, (req, res) => {
  return res.status(200).json(res.locals.interviews);
});

router.post('/add', calendarController.addEvents, (req,res) => {
  return res.status(200)
})


module.exports = router;