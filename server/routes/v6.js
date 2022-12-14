const express = require('express');
const router = express.Router();
const v6 = require('../models/v6_model');

router.get('/',
function(request, response) {
    v6.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;