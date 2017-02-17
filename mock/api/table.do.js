var Mock = require('mockjs')

module.exports = function (req, res, next) {
  var data = {
    totalCount: 100,
    pageNo: req.query.pageNo,
    pageSize: req.query.pageSize
  }
  data['listData|' + (req.query.pageSize||30)] = [{
    id: '@id',
    data: '@time("yyyy-MM-dd")',
    'name': '@name',
    city: '@city',
    address: '@county(true)',
    'role': '普通用户',
    "operate": function () {
      return ['delete', 'look', 'edit'].filter(function () {
        return Math.random() > 0.8 ? true : false
      })
    }
  }]
  data = JSON.stringify(Mock.mock(data))
  res.end(data)
}
