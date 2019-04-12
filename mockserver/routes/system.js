var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
// 将mock引入
var Random = Mock.Random;
// 生成对应随机对象

/* GET users listing. */
router.get('/warn', function (req, res, next) {
  var data = Mock.mock({
    'list|20': [{
      'guid': Random.guid(),
      'id|+1': 1,
      'serial_number|1-100': 1,
      'warn_number|1-100': 1,
      'warn_name|1': ['报警类型1', '报警类型2', '报警类型3'],
      'warn_level|1': ['紧急', '重要'],
      'warn_detail': '环境IP:@ip() ,地址:@county(true) 服务名称:@ctitle() ',
      'create_time': Random.datetime(),
      'finish_time': Random.datetime(),
      'contact': '@cname()',
      'description': '@cparagraph',
      'img': Random.image(),
    }]
  });

  res.send({
    meta: {
      message: 'success'
    },
    status: true,
    data: data.list
  })
});

module.exports = router; 