const express = require('express');
const router = express.Router();
const northernhemi = require('../models/northernhemisphere_model');

router.get('/',
function(request, response) {
    northernhemi.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;