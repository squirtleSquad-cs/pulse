const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController')

router.post('/check', loginController.checkLogin, (req, res) => {
  res.status(200).json('Login successful');
})

router.post('/create', loginController.createUser, loginController.createMongo, (req, res) => {
  return res.status(200).json('User created');
})

module.exports = router;