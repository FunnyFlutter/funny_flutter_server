const dataMap = {
  
};

module.exports = function(request, response) {
  if (request.method === 'GET') {
    const email = request.query.email;
    const data = dataMap[email];
    if (data) {
      response.json({
        error: "",
        data: data,
      });
      return
    }
    response.json({
      error: `参数错误,${email} 不存在对应的数据`,
      data: [],
    });
  } else if (request.method === 'POST') {
    const email = request.body.email;
    if (!email) {
      response.json({
        error: `参数错误，email 不应为空`,
        data: [],
      });       
      return; 
    }
    dataMap[email] = {
      data: request.body.data,
      timestamp: request.body.timestamp,
    }
    response.json({
      error: "",
      data: [],
    });
  }
}