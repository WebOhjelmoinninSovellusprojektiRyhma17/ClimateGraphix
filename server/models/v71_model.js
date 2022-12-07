const db = require('../database');

const rawString = String.raw`select * from v71`

const v71 = {
    getAll: function(callback) {
      return db.query(rawString, callback);
    }
  };
  module.exports = v71;