const express = require('express');
const router = express.Router();
const co2annual = require('../models/co2annual_model');

router.get('/',
function(request, response) {
    co2annual.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});


module.exports = router;