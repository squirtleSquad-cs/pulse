const { User } = require("../models/nosqlModel");
const sql = require("../models/sqlModel");
const bcrypt = require("bcrypt");
const axios = require("axios").default;

const loginController = {};

loginController.checkLogin = (req, res, next) => {
  const { username, password } = req.body;
  // console.log('from login controller:', [username, password])
  // const loginQuery = `SELECT * FROM USERS WHERE Username = ${username} AND PASSWORD = ${password}`;
  const query1 = 'SELECT password FROM users WHERE username = $1'
  const values1 = [username]
  // sql
  //   .query(loginQuery)
  //   .then((data) => {
  //     if (data.rows > 0) {
  //       res.locals.user = data.rows[0];
  //       return next();
  //     }
  //     res.locals.fail = "Login failed";
  //     return next();
  //   })
  sql.query(query1, values1)
  .then(sqlRes => {
    console.log('sqlRes', sqlRes)
    const hash = sqlRes.rows[0].password;
    console.log(hash)
    bcrypt.compare(password, hash)
      .then(result => {
        console.log('hash result', result)
        if (result) {
          const values2 = [username];
          User.findOne({username: values2})
            .then((verifiedUser) => {
              res.locals.userEvents = verifiedUser.events;
              // console.log('User Events', res.locals.userEvents)
              // console.log('verified user inside sql query', verifiedUser)
              return next();
            })
            .catch(err => {
              const errObj = {
                log: err,
                message: {Error: 'Login Failed'}
              }
              next(errObj)
            })
        } else {
          return next()
        }
      })
      .catch(err => {
        return next({
          log: `error in bcrypt compare ${err}`,
          message: 'Issue with bcrypt'
        })
      })
  })
    .catch((err) => {
      console.log(`Issue with checkLogin ${err}`);
      next(err);
    });
};

loginController.createUser = (req, res, next) => {
  // console.log(["inside create user", req.body]);
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

loginController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const query1 = 'SELECT password FROM users WHERE username = $1'
  const values1 = [username]

  sql.query(query1, values1)
  .then(sqlRes => {
    const hash = sqlRes.rows[0].password;
    bcrypt.compare(password, hash)
      .then(result => {
        console.log('hash result', result)
        if (result) {
          const query2 = 'SELECT username WHERE username = $1';
          const values2 = [username];

          db.query(query2, values2)
            .then((verifiedUser) => {
              res.locals.user = verifiedUser.rows[0];
              console.log(verifiedUser)
              return next();
            })
            .catch(err => {
              const errObj = {
                log: err,
                message: {Error: 'Login Failed'}
              }
              next(errObj)
            })
        } else {
          return next()
        }
      })
      .catch(err => {
        return next({
          log: `error in bcrypt compare ${err}`,
          message: 'Issue with bcrypt'
        })
      })
  })
  .catch(err => {
    return next({
      log: `username or password not found ${err}`,
      message: 'no username or password'
    })
  })
};

loginController.createMongo = async (req, res, next) => {
  const { username } = req.body;
  console.log("hello from mongo");
  console.log(username)
  await User.create({ username: username }, function (err, user) {
    // console.log("after mongo query", user);
    if (err) return next("err in mongo");
    return next();
  });
};

module.exports = loginController;
