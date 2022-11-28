const express = require('express');
const router = express.Router();
const v2 = require('../models/v2_model');


//Määritellään get pyyntö ja kutsutaan v2 modelia
router.get('/',
function(request, response) {
    v2.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;