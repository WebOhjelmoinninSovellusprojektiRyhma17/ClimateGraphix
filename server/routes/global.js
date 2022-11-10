const express = require('express');
const router = express.Router();
const globalA = require('../models/global_model');

router.get('/:Time?',
 function(request, response) {
  if (request.params.Time) {
    globalA.getById(request.params.Time, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    globalA.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});

module.exports = router;