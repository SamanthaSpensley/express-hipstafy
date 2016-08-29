var express = require('express');
var router = express.Router();
var snippets = require('../lib/snippets.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hipstafy' });
});
router.post('/', function(req, res, next) {
  var userInput = req.body.input.split(' ')
  var hipstafied = '';
  userInput.forEach(function(unhipword) {
    hipstafied += unhipword + ' ' + snippets[Math.round(Math.random() * snippets.length)] + ' '
  })
  res.render('index', {output: hipstafied})
});

module.exports = router;
