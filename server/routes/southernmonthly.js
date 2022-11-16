const express = require('express');
const router = express.Router();
const southernmonth = require('../models/southernmonthly_model');

router.get('/',
 function(request, response) {
  if (request.params.Time) {
    southernmonth.getById(request.params.Time, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    southernmonth.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});

module.exports = router;