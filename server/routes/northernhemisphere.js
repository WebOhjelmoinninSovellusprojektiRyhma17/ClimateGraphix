const express = require('express');
const router = express.Router();
const northernhemi = require('../models/northernhemisphere_model');

router.get('/',
 function(request, response) {
  if (request.params.Time) {
    northernhemi.getById(request.params.Time, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    northernhemi.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});

module.exports = router;