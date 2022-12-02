const express = require('express');
const router = express.Router();
const subsectorF = require('../models/subsectorfurther_model');

router.get('/',
function(request, response) {
    subsectorF.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;