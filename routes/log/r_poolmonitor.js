'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/log/poolmonitor.html', function(req, res, next) {
    res.render('log/poolmonitor', { title: 'Express' });
});

module.exports = router;