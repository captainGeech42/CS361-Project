var fs = require("fs");
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const multer = require('multer');

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
app.use(multer({dest:'./public/uploads'}).single('resource'));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');


//==================================
//=            ROUTING             =
//==================================

var viewDictionary = utils.discoverViews('views/');

app.get('/', function(req, res, next){
    res.status(200).render('index');
});

//renders homework questions to page
app.get('/topics/:topicID/:pageName', function(req, res, next){
    // res.status(200).render(req.params.pageName);
    res.status(200).render('Algebra');
});

app.get('/my-account', function(req, res, next){
    var user = db.getUserByPassword(req.cookies.user);
    if(user){
        res.status(200).render('my-account', {
            "uploadedContent": db.getResourcesByUser(user.email),
            "validUser": true
        });
    }else {
        res.status(200).render('my-account', {
            "uploadedContent": [],
            "validUser": false
        });
    }
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


app.get('/upload', function(req, res, next){
    var topicData = db.getAllChildTopics().sort(function(a,b){
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return 1;
        }else if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1;
        }else{
            return 0;
        }
    });

    res.status(200).render('upload', {
        "topics": topicData
    });
});

app.post('/upload', function(req, res, next){
    var user = db.getUserByPassword(req.body.password.replace(/%24/g, "$")); //somewhere along the way the password is espaced via HTML, transforming dollar signs into %24

    if(user){
        db.addResource(req.body.name, req.body.description, req.body.type, req.file.path, req.body.topic, user.email);
        res.render('/upload', {message: "Upload successful!"});
    } else{
        res.render('/upload', {message: "Please login to upload content. "});
    }
})

app.post('/do-delete', function(req, res, next) {
    // console.log(db.getUserByPassword(req.cookies.user));
    db.deleteUserByPassword(req.cookies.user);
    // res.status(200).cookie(prop, '', {expires: new Date(0)});
    cookie = req.cookies;
    for(var i in cookie) {
        if(!cookie.hasOwnProperty(i)) {
            continue;
        }
        res.cookie(i, "", {expires: new Date(0)});
    }
    res.redirect('/');
})


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
            res.redirect('/do-create-account');
        }
        console.log(`Adding new user: ${req.body.email} ${hash}`);

        db.addUser(req.body.email, hash, req.body.password);

        res.cookie('user', hash);
        res.redirect('/');
    });
});

// handle a user logging in
app.post('/do-login', function(req, res, next) {
    console.log(req.body);
    var user = db.getUserByEmail(req.body.email);

    bcrypt.compare(req.body.password, user ? user.password : '', (err, result) => {
        if (result) {
            res.cookie('user', user.password);
            res.render('my-account',  { message: 'Successfully logged in!'});

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
