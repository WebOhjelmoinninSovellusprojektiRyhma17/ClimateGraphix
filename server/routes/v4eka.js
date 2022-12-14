const express = require('express');
const router = express.Router();
const eka = require('../models/v4eka_model');

router.get('/',
function(request, response) {
    eka.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;