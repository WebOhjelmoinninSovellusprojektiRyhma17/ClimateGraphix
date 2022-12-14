const express = require('express');
const router = express.Router();
const NationalCo2 = require('../models/NationalCo2_model');

router.get('/',
function(request, response) {
    NationalCo2.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});


module.exports = router;