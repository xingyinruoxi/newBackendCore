'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/system/rolemanage.html', function(req, res, next) {
    res.render('system/rolemanage', { title: 'Express' });
});

module.exports = router;