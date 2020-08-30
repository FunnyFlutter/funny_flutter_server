const dataMap = {

};

module.exports = function (request, response) {
  if (request.method === 'GET') {
    const userKey = request.query.userKey;
    const data = dataMap[userKey];
    if (data) {
      response.json({
        error: "",
        data: data,
      });
      return
    }
    response.json({
      error: `参数错误,${userKey} 不存在对应的数据`,
      data: [],
    });
  } else if (request.method === 'POST') {
    const userKey = request.body.userKey;
    if (!userKey) {
      response.json({
        error: `参数错误，email 不应为空`,
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