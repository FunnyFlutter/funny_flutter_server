const index = require('./api/index');
const login = require('./api/login');
const signup = require('./api/signup');
const list = require('./api/list');

module.exports = function(app) {
  app.route("/").get(index);
  app.route("/login").post(login);
  app.route("/signup").post(signup);
  app.route("/list").get(list);
}
