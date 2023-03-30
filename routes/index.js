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
  let page ='\
  <!DOCTYPE html>\
    <html lang= en-us">\
      <head>\
        <title>task3-2</title>\
      </head>\
      <body>\
        <h1 id="color"></h1>\
        <script>\
        var C = document.getElementById("color");\
        var color_number = 0;\
        var color_number='+ color_number +';\
        if(color_number == 0){\
          C.innerText = "red";\
          C.style.color = "red";\
        }\
        else if(color_number == 1){\
          C.innerText = "yellow";\
          C.style.color = "yellow";\
        }\
        else if(color_number == 2){\
          C.innerText = "green";\
          C.style.color = "green";\
        }\
        else if(color_number == 3){\
          C.innerText = "blue";\
          C.style.color = "blue";\
        }\
        </script>\
      </body>\
  </html>\
'
color_number++;
if(color_number == 4){
  color_number = 0;
}
res.send(page);
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
