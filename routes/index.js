var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.get('/points-of-interest', function(req, res, next) {
  var points = [
    { lat: 47.615481, lng: -122.320295, title: "Substantial" },
    { lat: 47.595152, lng: -122.331639, title: "CenturyLink Field" },
    { lat: 47.651034, lng: -122.347323, title: "Fremont Troll" }
  ];
  res.json(points);
});

module.exports = router;
