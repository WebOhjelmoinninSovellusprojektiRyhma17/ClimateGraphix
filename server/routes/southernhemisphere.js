const express = require('express');
const router = express.Router();
const southernhemi = require('../models/southernhemisphere_model');

router.get('/',
function(request, response) {
    southernhemi.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;