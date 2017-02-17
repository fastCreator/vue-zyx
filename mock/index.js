import Mock from 'mockjs'

/*设置请求时间*/
Mock.setup({
  timeout: '200-600'
})

/*生孩子*/
createMock('/login','post', require('./api/login.do.js'))
createMock('/tree', 'get', require('./api/tree.do'))
createMock('/table', 'get', require('./api/table.do'))

/*mock工厂*/
function createMock(url, type, fuc) {
  return function () {
    Mock.mock(url, type, function (options) {
      var data=Mock.mock(fuc(options))
      console.info({
        url: url,
        type: type,
        data: data
      });
      return data
    });
  }()
}
