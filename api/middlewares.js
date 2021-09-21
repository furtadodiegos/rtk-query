const checkLogin = ({ body }, res, next) => {
  if (body.email === 'admin@email.com' && body.password === '123456') return next();

  return res.status(404).send('invalid email or password');
};

module.exports = { checkLogin };
