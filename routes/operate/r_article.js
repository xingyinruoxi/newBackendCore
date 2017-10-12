'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/operate/articlemanage.html', function(req, res, next) {
    res.render('log/articlemanage', { title: 'Express' });
});

module.exports = router;