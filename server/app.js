var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var cors = require('cors');

//Jokaiselle routes tiedostolle oma
var vostokRouter = require('./routes/vostok');
var v2Router = require('./routes/v2');
var usersRouter = require('./routes/users');
var globalRouter = require('./routes/global');
var globalMonthlyRouter = require('./routes/globalmonthly');
var northernMonthlyRouter = require('./routes/northernmonthly');
var northernRouter = require('./routes/northernhemisphere');
var southernRouter = require('./routes/southernhemisphere');
var southernMonthlyRouter = require('./routes/southernmonthly');
var co2Router = require('./routes/co2annual');
var co2MonthlyRouter = require('./routes/co2monthly');
var v4ekaRouter = require('./routes/v4eka');
var v4tokaRouter = require('./routes/v4toka');
var v4kolmasRouter = require('./routes/v4kolmas');


var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Jokaiselle router tiedostolle oma oma
app.use('/users', usersRouter);
app.use('/v2', v2Router);
app.use('/vostok', vostokRouter);
app.use('/global', globalRouter);
app.use('/globalmonthly', globalMonthlyRouter);
app.use('/northernmonthly', northernMonthlyRouter);
app.use('/northern', northernRouter);
app.use('/southern', southernRouter);
app.use('/southernmonthly', southernMonthlyRouter);
app.use('/co2annual', co2Router);
app.use('/co2monthly', co2MonthlyRouter);
app.use('/v4eka', v4ekaRouter);
app.use('/v4toka', v4tokaRouter);
app.use('/v4kolmas', v4kolmasRouter);

module.exports = app;
