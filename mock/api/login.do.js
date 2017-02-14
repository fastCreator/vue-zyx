var Mock = require('mockjs')

module.exports = function (req, res, next) {
  var ps = req.body, data;
  if (ps.email === 'admin' && ps.pass === 'admin') {
    data = {
      authenticated: true,
      token: Math.random().toString(36).substring(7)
    };
  } else {
    data = {authenticated: false}
  }
  data = JSON.stringify(data);
  res.status(200)
  res.end(data)
}
