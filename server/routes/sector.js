const express = require('express');
const router = express.Router();
const sector = require('../models/sector_model');

router.get('/',
function(request, response) {
    sector.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;