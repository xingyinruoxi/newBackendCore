'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/company/adduser.html', function(req, res, next) {
    res.render('company/adduser', { title: 'Express' });
});

module.exports = router;