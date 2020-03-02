var fs = require("fs");
var path = require('path');
var express = require('express');
var exphbs = require('express3-handlebars');

var utils = require('./utils/utils');

global.__basedir = __dirname + '/..'; //finds the base directory of the node project

//==================================
//=    EXPRESS/HANDLEBARS SETUP    =
//==================================

var app = express();
var port = process.env.PORT || 3000;

hbs = hbs = exphbs.create({
  // Specify helpers which are only registered on this instance.
  defaultLayout: 'main',
  helpers: {
      foo: function () { return 'FOO!'; },
      bar: function () { return 'BAR!'; }
  },
  extname:'.hbs'
});


app.use(express.static('public'));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
 

//==================================
//=            ROUTING             =
//==================================

var viewDictionary = utils.discoverViews('views/');

app.get('/', function(req, res, next){
  res.status(200).render('index');
});

//general routing for pages
app.get('/:pageName',  function(req, res, next){
  if(viewDictionary[req.params.pageName + '.hbs']){
    console.log("Rendering page: " + req.params.pageName);

    res.render(req.params.pageName);
  }else{
    next();
  }
});


app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});