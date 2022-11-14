var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var cors = require('cors');

//Jokaiselle routes tiedostolle oma
var usersRouter = require('./routes/users');
var globalRouter = require('./routes/global');
var globalMonthlyRouter = require('./routes/globalM');

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Jokaiselle router tiedostolle oma oma
app.use('/users', usersRouter);
app.use('/global', globalRouter);
app.use('/monthly', globalMonthlyRouter);

module.exports = app;
