const db = require('../database');

const v6 = {
    getAll: function(callback) {
      return db.query('select * from v6', callback);
    }
  };
  module.exports = v6;