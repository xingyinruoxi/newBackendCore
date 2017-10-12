'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/personal/userinfo.html', function(req, res, next) {
    res.render('personal/userinfo', { title: 'Express' });
});

module.exports = router;