const express = require('express');
const router = express.Router();

router.post('/', loginController.login, (req, res) => {
  res.status(200).json('login successful')
})