'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/system/dictionaryemanage.html', function(req, res, next) {
    res.render('system/dictionaryemanage', { title: 'Express' });
});

module.exports = router;