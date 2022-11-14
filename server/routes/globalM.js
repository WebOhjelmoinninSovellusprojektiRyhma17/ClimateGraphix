const express = require('express');
const router = express.Router();
const globalMonthly = require('../models/globalM_model');

router.get('/',
 function(request, response) {
  if (request.params.Time) {
    globalMonthly.getById(request.params.Time, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    globalMonthly.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});

module.exports = router;