var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('teste', { 
    title: 'Express',
    numero: 234
  });
});

module.exports = router;
