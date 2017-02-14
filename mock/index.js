var express = require('express');
var router = express.Router();

router.post('/login', require('./api/login.do.js'));
router.get('/tree', require('./api/tree.do.js'));
router.get('/table', require('./api/table.do.js'));
router.get('/system', require('./api/list.do.js'));
module.exports=router;
