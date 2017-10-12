'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/company/company.html', function(req, res, next) {
    res.render('company/company', { title: 'Express' });
});

module.exports = router;