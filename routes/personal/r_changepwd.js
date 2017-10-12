'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/personal/changepwd.html', function(req, res, next) {
    res.render('personal/changepwd', { title: 'Express' });
});

module.exports = router;