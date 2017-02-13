var express = require('express');
var router = express.Router();

router.get('/user/list.do', require('./user/list.do'));

module.exports=router;
