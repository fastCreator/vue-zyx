module.exports = function (opt) {
  var ps = JSON.parse(opt.body), data;
  if (ps.email === 'admin' && ps.pass === 'admin') {
    data = {
      authenticated: true,
      token: Math.random().toString(36).substring(7)
    };
  } else {
    data = {authenticated: false}
  }
  return data;
}
