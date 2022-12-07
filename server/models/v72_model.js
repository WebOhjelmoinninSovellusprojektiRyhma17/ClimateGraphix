const db = require('../database');
const rawString = String.raw`select * from v72`

const v72 = {
    getAll: function(callback) {
      return db.query(rawString, callback);
    }
  };
  module.exports = v72;