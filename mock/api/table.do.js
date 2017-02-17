module.exports = function (opt) {
  var data = {
    totalCount: 100
  }
  data['listData|30'] = [{
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
  return data;
}
