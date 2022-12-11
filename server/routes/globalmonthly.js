const express = require('express');
const router = express.Router();
const globalMonthly = require('../models/globalmonthly_model');

router.get('/',
function(request, response) {
    globalMonthly.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;