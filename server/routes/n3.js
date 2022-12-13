const express = require('express');
const router = express.Router();
const user = require('../models/n3_model');

router.get('/:id?',
  function (request, response) {
    if (request.params.id) {
      user.getById(request.params.id, function (err, dbResult) {
        if (err) {
          response.json(err);
        } else {
          response.json(dbResult);
        }
      });
    } else {
      user.getAll(function (err, dbResult) {
        if (err) {
          response.json(err);
        } else {
          response.json(dbResult);
        }
      });
    }
  });

router.delete('/:id',
  function (request, response) {
    user.delete(request.params.id, function (err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  });

router.post('/',
  function (request, response) {
    user.add(request.body, function (err, dbResult) {
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