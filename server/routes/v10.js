const express = require('express');
const router = express.Router();
const v10 = require('../models/v10_model');

router.get('/',
function(request, response) {
    v10.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;