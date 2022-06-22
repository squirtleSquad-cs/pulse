const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  const { username } = req.body;
  res.cookie(username);
  next();
};


module.exports = cookieController;