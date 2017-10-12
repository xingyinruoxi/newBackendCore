'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  //res.send('re876543urce');
    res.render('personal/userinfo', { title: 'Express' });
});

module.exports = router;
