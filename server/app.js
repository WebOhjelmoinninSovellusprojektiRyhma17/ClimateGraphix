const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');

//Jokaiselle routes tiedostolle oma

const app = express();

const vostokRouter = require('./routes/vostok');
const loginRouter = require('./routes/login');
const v2Router = require('./routes/v2');
const v71Router = require('./routes/v71');
const v72Router = require('./routes/v72');
const usersRouter = require('./routes/users');
const globalRouter = require('./routes/global');
const globalMonthlyRouter = require('./routes/globalmonthly');
const northernMonthlyRouter = require('./routes/northernmonthly');
const northernRouter = require('./routes/northernhemisphere');
const southernRouter = require('./routes/southernhemisphere');
const southernMonthlyRouter = require('./routes/southernmonthly');
const co2Router = require('./routes/co2annual');
const co2MonthlyRouter = require('./routes/co2monthly');
const co2annualRouter = require('./routes/co2annual');
const v4ekaRouter = require('./routes/v4eka');
const v4tokaRouter = require('./routes/v4toka');
const v4kolmasRouter = require('./routes/v4kolmas');
const NationalCoRouter = require('./routes/NationalCo2');
const sectorRouter = require('./routes/sector');
const subsectorRouter = require('./routes/subsector');
const subsectorfurtherRouter = require('./routes/subsectorfurther');
const v6Router = require('./routes/v6');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Jokaiselle router tiedostolle oma oma
app.use('/users', usersRouter);
app.use('/v2', v2Router);
app.use('/v71', v71Router);
app.use('/v72', v72Router);
app.use('/vostok', vostokRouter);
app.use('/global', globalRouter);
app.use('/globalmonthly', globalMonthlyRouter);
app.use('/northernmonthly', northernMonthlyRouter);
app.use('/northern', northernRouter);
app.use('/southern', southernRouter);
app.use('/southernmonthly', southernMonthlyRouter);
app.use('/co2annual', co2annualRouter);
app.use('/NationalCo2', NationalCoRouter)
app.use('/co2annual', co2Router);
app.use('/co2monthly', co2MonthlyRouter);
app.use('/v4eka', v4ekaRouter);
app.use('/v4toka', v4tokaRouter);
app.use('/v4kolmas', v4kolmasRouter);
app.use('/login', loginRouter);
app.use('/sector', sectorRouter);
app.use('/subsector', subsectorRouter);
app.use('/subsectorfurther', subsectorfurtherRouter);
app.use('/v6', v6Router);

app.use(authenticateToken);                             //Tämän jälkeen olevat toimivat token autentikoinnilla

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    console.log("token = "+token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.MY_TOKEN, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }
module.exports = app;
