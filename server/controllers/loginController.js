const axios = require('axios').default;

const loginController = {};

loginController.checkLogin = (req, res, next) => {
  const { username, password } = req.body;
  
}