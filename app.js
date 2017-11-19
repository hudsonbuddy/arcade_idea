var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var keypress = require('keypress');
var index = require('./routes/index');
var p2 = require('./routes/p2');
var p3 = require('./routes/p3');
var p4 = require('./routes/p4');
var p5 = require('./routes/p5');
var p6 = require('./routes/p6');
var p7 = require('./routes/p7');
var p8 = require('./routes/p8');
var p9 = require('./routes/p9');

var app = express();

 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/p2', p2);
app.use('/p3', p3);
app.use('/p4', p4);
app.use('/p5', p5);
app.use('/p6', p6);
app.use('/p7', p7);
app.use('/p8', p8);
app.use('/p9', p9);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
