var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
const helmet = require('helmet');
const cors = require('cors');


//Jokaiselle routes tiedostolle oma
var usersRouter = require('./routes/users');
var globalRouter = require('./routes/global');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(cors());


//Jokaiselle router tiedostolle oma oma
app.use('/users', usersRouter);
app.use('/global', globalRouter);

module.exports = app;
