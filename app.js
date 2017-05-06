'use strict';
var express = require('express');
var timeout = require('connect-timeout');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var AV = require('leanengine');
var favicon = require('serve-favicon');

// 加载云函数定义，你可以将云函数拆分到多个文件方便管理，但需要在主文件中加载它们
require('./cloud');

var app = express();

// 设置模板引擎
app.set('view engine', 'html');

// app.use(express.static('public'));

// 设置默认超时时间
app.use(timeout('15s'));

// 加载云引擎中间件
app.use(AV.express());

app.enable('trust proxy');
// 需要重定向到 HTTPS 可去除下一行的注释。
// app.use(AV.Cloud.HttpsRedirect());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'dist'))); //静态文件
app.use(favicon(__dirname + '/dist/images/favicon.ico'));

app.use(function(req, res, next) {
    next();
});

app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/dist/views/index.html');
});

app.get('/experience', function(req, res) {
    res.sendFile(__dirname + '/dist/views/experience.html');
})

//solution
app.get('/solution', function(req, res) {
    res.sendFile(__dirname + '/dist/views/solution.html');
})

app.get('/solution/suppermaker', function(req, res) {
    res.sendFile(__dirname + '/dist/views/solution_tpl.html');
})

app.get('/solution/retail', function(req, res) {
    res.sendFile(__dirname + '/dist/views/solution_tpl.html');
})

app.get('/solution/butcher', function(req, res) {
    res.sendFile(__dirname + '/dist/views/solution_tpl.html');
})

app.get('/solution/eatery', function(req, res) {
    res.sendFile(__dirname + '/dist/views/solution_tpl.html');
})

app.get('/solution/food', function(req, res) {
    res.sendFile(__dirname + '/dist/views/solution_tpl.html');
})

app.get('/solution/fresh', function(req, res) { //raise
    res.sendFile(__dirname + '/dist/views/solution_tpl.html');
})

app.get('/solution/farmers', function(req, res) { //raise
    res.sendFile(__dirname + '/dist/views/solution_tpl.html');
})

app.get('/solution/raise', function(req, res) { //raise
    res.sendFile(__dirname + '/dist/views/solution_tpl.html');
})

app.get('/report', function(req, res) {
    res.sendFile(__dirname + '/dist/views/report.html');
})

app.get('/join', function(req, res) {
    res.sendFile(__dirname + '/dist/views/join.html');
})

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/dist/views/about.html');
})


app.get('*', function(req, res) {
    res.sendFile(__dirname + '/dist/views/index.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/views/index.html');
});


module.exports = app;
