const express = require('express');
const router = express.Router();
const northM = require('../models/northernmonthly_model');

router.get('/',
function(request, response) {
    northM.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;