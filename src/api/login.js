module.exports = function(request, response) {
  if (request.body.email == 'foo@qq.com' && request.body.password == 'foobar') {
    response.json({
      error: "",
      data: {
        userId: "1"
      }
    });
    return;
  }
  if (request.body.email == 'lazy@qq.com' && request.body.password == 'lazylazy') {
      setTimeout(() => {
        response.json({
          error: "",
          data: {
            userId: "1"
          }
        });
      }, 3000);
    return;
  }
  response.json({
    error: "用户名或密码不正确",
    data: {}
  });
}