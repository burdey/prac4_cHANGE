var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/last.txt', function(req, res, next) {
  date = new Date().toString();
  res.send(date);
});


var timestamp="";
var i=1;
router.get('/log.html', function(req, res, next){
  if(i++ == 1){
    timestamp = new Date().toString();
  }
  else{
    timestamp = timestamp + "<br>" + (new Date().toString());
    res.send(timestamp);
  }
});

module.exports = router;
