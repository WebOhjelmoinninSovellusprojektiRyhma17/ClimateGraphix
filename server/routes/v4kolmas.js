const express = require('express');
const router = express.Router();
const kolmas = require('../models/v4kolmas_model');

router.get('/',
function(request, response) {
    kolmas.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;