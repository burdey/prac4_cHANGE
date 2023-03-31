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

var color_number = 0;
router.get('/color.html', function(req,res,next){
  res.send('<!DOCTYPE html>\
    <html lang= en-us">\
      <head>\
        <title>task3-2</title>\
      </head>\
      <body>\
        <h1 id="color">innerText</h1>\
        <script>\
        var C = document.getElementById("color");\
        var color_number = 0;\
        var color_number='+ color_number +';\
        if(color_number == 0){\
          C.style.color = "red";\
          C.innerText = "red";\
        }\
        else if(color_number == 1){\
          C.style.color = "yellow";\
          C.innerText = "yellow";\
        }\
        else if(color_number == 2){\
          C.style.color = "green";\
          C.innerText = "green";\
        }\
        else if(color_number == 3){\
          C.style.color = "blue";\
          C.innerText = "blue";\
        }\
        </script>\
      </body>\
  </html>\
');

color_number++;
if(color_number == 4){
  color_number = 0;
}

});


var timestamp="";
var i=1;
router.get('/log.html', function(req, res, next){
    timestamp = timestamp + "<br>" + (new Date().toString());
    res.send(timestamp);
    res.send(date1);
    res.send(i);
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

var first = false;
router.get('/first.html', function(req, res, next){
  if(!first){
    first = true;
    res.send('<!DOCTYPE html>\
    <html lang="en-us">\
      <body>\
        <h1 id="first">Welcome</h1>\
        <br/>\
        <a href="/main.html"> MAIN </a>\
      </body>\
    </html>');
  }
  else{
    res.redirect('/main.html');
  }
});

router.get('/main.html', function(req, res, next){
  if(!first){
    res.redirect('/first.html');
  }
  else{
    res.send('<!DOCTYPE html>\
      <html lang="en-us">\
        <body>\
          <h1 id="first">My main site</h1>\
          <br/>\
          <p>Go to First</p>\
        </body>\
      </html>'); 
  }
});

var accept = false; 
router.get('/accept', function(req, res, next){
  accept = true;
  res.status(200).end();
});

router.get('/content.ajax', function(req, res, next){
  if(!accept){ 
    res.status(403).end();
  }
  else{
    res.send("<p> Albireo </P> \n <p> Glimmer</P>");
    res.status(200).end();
  }
});

module.exports = router;
