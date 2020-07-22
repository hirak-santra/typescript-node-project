let middleware1 = function (req, res, next) {
  console.log('LOGGED1111111111')
  next()
};

export default middleware1;
