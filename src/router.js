const index = require('./api/index');
const login = require('./api/login');
const register = require('./api/register');
const list = require('./api/list');

module.exports = function (app) {
  app.route("/").get(wrapper(index));
  app.route("/login").post(wrapper(login));
  app.route("/register").post(wrapper(register));
  app.route("/list").get(wrapper(list));
  app.route("/list").post(wrapper(list));
}

const wrapper = (router) => {
  return (request, response) => {
    console.log(`request path is ${request.url}`);
    console.log(`request method is ${request.method}`);
    console.log(`request headers is ${JSON.stringify(request.headers)}`);
    console.log(`request body is ${JSON.stringify(request.body)}\n`);
    router(request, response);
  };
}