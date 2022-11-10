const express = require('express');
const router = express.Router();
const db = require('../database');
const { restart } = require('nodemon')

router.get('/globalA',
    function(request, response) {
        db.query('select * from v1',
        function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    }
);