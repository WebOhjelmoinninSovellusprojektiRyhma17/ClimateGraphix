const express = require('express');
const router = express.Router();
const subsector = require('../models/subsector_model');

router.get('/',
function(request, response) {
    subsector.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;