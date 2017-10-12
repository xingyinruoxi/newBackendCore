'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/system/groupmanage.html', function(req, res, next) {
    res.render('system/groupmanage', { title: 'Express' });
});

module.exports = router;