'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/operate/messagemanage.html', function(req, res, next) {
    res.render('log/messagemanage', { title: 'Express' });
});

module.exports = router;