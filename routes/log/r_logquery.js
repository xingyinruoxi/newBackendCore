'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/log/logquery.html', function(req, res, next) {
    res.render('log/logquery', { title: 'Express' });
});

module.exports = router;