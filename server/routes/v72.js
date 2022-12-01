const express = require('express');
const router = express.Router();
const toka = require('../models/v72_model');

router.get('/',
function(request, response) {
    toka.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;