const db = require('../database');
const rawString = String.raw`select * from v72`

const v72 = {
    getAll: function(callback) {
      return db.query('select * from v72', callback);
    }
  };
  module.exports = v72;