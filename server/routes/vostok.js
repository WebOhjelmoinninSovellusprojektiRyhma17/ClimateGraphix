const express = require('express');
const router = express.Router();
const vostok = require('../models/vostok_model');

router.get('/',
function(request, response) {
    vostok.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    })});

    module.exports = router;