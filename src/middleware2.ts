let middleware2 = function (req, res, next) {
  console.log('LOGGED2222222')
  next()
};

export default middleware2;
