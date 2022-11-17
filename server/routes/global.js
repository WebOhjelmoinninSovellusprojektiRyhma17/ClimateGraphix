const express = require('express');
const router = express.Router();
const globalA = require('../models/global_model');

router.get('/',
function(request, response) {
    globalA.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;