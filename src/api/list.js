const dataMap = {

};

module.exports = function (request, response) {
  if (request.method === 'GET') {
    const userKey = request.query.userKey;
    const data = dataMap[userKey] || { data: [], timestamp: 0 };
    response.json({
      error: "",
      data: data,
    });
  } else if (request.method === 'POST') {
    const userKey = request.body.userKey;
    if (!userKey) {
      response.json({
        error: `userKey 不应为空`,
        data: [],
      });
      return;
    }
    dataMap[userKey] = {
      data: request.body.data,
      timestamp: request.body.timestamp,
    }
    response.json({
      error: "",
      data: [],
    });
  }
}