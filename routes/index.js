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
    timestamp = timestamp + "<br>" + (new Date().toString());
    res.send(timestamp);
});

router.use(express.static('public'));
var count = 0;
router.get('/color.txt', function(req, res){
  var color="";
  count++;
  if(count == 1){
    color= "red";
  }
  else if(count == 2){
    color= "yellow";
  }
  else if(count == 3){
    color= "green";
  }
  else if(count == 4){
    color= "blue";
    count = 0;
  }
  res.send(color);
});

module.exports = router;
