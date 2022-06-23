const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  const { username } = req.body;
  // console.log('in cookie controller', username);
  // res.cookie('name' , 'username');
  res.cookie('name' , username)
  next();
};


module.exports = cookieController;