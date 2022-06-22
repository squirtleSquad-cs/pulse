const { Data } = require("../models/nosqlModel");
const sql = require("../models/sqlModel");
const bcrypt = require("bcrypt");
const axios = require("axios").default;

const loginController = {};

loginController.checkLogin = (req, res, next) => {
  const { username, password } = req.body;
  const loginQuery = `SELECT * FROM USERS WHERE Username = ${username} AND PASSWORD = ${password}`;
  sql
    .query(loginQuery)
    .then((data) => {
      if (data.rows > 0) {
        res.locals.user = data.rows[0];
        return next();
      }
      res.locals.fail = "Login failed";
      return next();
    })
    .catch((err) => {
      console.log(`Issue with checkLogin ${err}`);
      next(err);
    });
};

loginController.createUser = (req, res, next) => {
  console.log(["inside create user", req.body]);
  const { username, password } = req.body;
  // Hash Password
  bcrypt
    .hash(password, 2)
    .then((hash) => {
      const values = [username, hash];
      const userQuery = `INSERT INTO users ("username", "password") VALUES ($1, $2)`;
      sql.query(userQuery, values).then((sqlRes) => {
        return next();
      });
    })
    .catch((err) => {
      console.log(`Issue with createUser, ${err}`);
      return next(err);
    });
};

loginController.createMongo = (req, res, next) => {
  const { username } = req.body;
  console.log("hello from mongo");
  Data.create({ id: username }, function (err, user) {
    console.log("after mongo query");
    if (err) return next("err in mongo");
    return next();
  });
};

module.exports = loginController;
