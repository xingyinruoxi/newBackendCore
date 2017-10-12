'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/company/area.html', function(req, res, next) {
    res.render('company/area', { title: 'Express' });
});

module.exports = router;