const express = require('express');
const router = express.Router();
const user = require('../models/n3_model');

router.post('/', 
function(request, response) {
  user.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
      console.log(err);
    } else {
      console.log(request.body);
      response.json(request.body);
    }
  });
});

module.exports = router;