var fs = require("fs");
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

var utils = require('./utils/utils');

const Database = require('./db/database');
var db = new Database();

global.__basedir = __dirname + '/..'; //finds the base directory of the node project

const bcryptSaltRounds = 10;

//==================================
//=    EXPRESS/HANDLEBARS SETUP    =
//==================================

var app = express();
var port = process.env.PORT || 3000;

hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    defaultLayout: 'main',
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    },
    extname:'.hbs'
});


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');


//==================================
//=            ROUTING             =
//==================================

var viewDictionary = utils.discoverViews('views/');

app.get('/', function(req, res, next){
    res.status(200).render('index');
});

app.get('/topics/:topicID/:pageName', function(req, res, next){
    // res.status(200).render(req.params.pageName);
    res.status(200).render('Algebra');
});


app.get('/topics', function(req, res, next){
    var topicData = new Array();
    var parentTopics = db.getParentTopics(); //array of a topic id strings
    for(var x = 0; x < parentTopics.length; x++){
        var childTopics = db.getChildTopics(parentTopics[x].id);
        topicData.push({
            parent: db.getTopic(parentTopics[x].id),
            childTopics: childTopics
        });
    }
    
    res.status(200).render('topics', {
        "topicData": topicData,
        "popularTopics": db.getPopularTopics(10),
        "popularResources": db.getPopularResources(10)
    });

});

// app.get('/topics/:topicID', function(req, res, next) {
//     // TODO make a topic page here
//     next();
// });

// handle creating an account
app.post('/do-create-account', function(req, res, next) {
    console.log(req.body);
    bcrypt.hash(req.body.password, bcryptSaltRounds, (err, hash) => {
        if (err) {
            console.err(`Error hashing password: ${err}`);
        }
        console.log(`Adding new user: ${req.body.email} ${hash}`);

        db.addUser(req.body.email, hash, req.body.password);
    });

    res.redirect('/');
});

// handle a user logging in
app.post('/do-login', function(req, res, next) {
    console.log(req.body);
    var user = db.getUserByEmail(req.body.email);

    bcrypt.compare(req.body.password, user ? user.password : '', (err, result) => {
        if (result) {
            res.cookie('user', user.password, {'httpOnly': true});
            console.log("user logged in successfully");
            res.render('login', { message: 'Successfully logged in!'});
        } else {
            console.log("user failed log in");
            res.render('login', { message: 'Failed to log in, bad creds :('});
        }
    });
})

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
