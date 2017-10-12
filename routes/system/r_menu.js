'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/system/menumanage.html', function(req, res, next) {
    res.render('system/menumanage', { title: 'Express' });
});

module.exports = router;