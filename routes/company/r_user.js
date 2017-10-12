'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/company/user.html', function(req, res, next) {
    res.render('company/user', { title: 'Express' });
});

module.exports = router;