const express = require('express');
const router = express.Router();
const co2monthly = require('../models/co2monthly_model');

router.get('/',
function(request, response) {
    co2monthly.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});


module.exports = router;