const express = require('express');
const router = express.Router();
const northM = require('../models/northernmonthly_model');

router.get('/',
 function(request, response) {
  if (request.params.Time) {
    northM.getById(request.params.Time, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    northM.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});

module.exports = router;