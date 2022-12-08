const db = require('../database');

const v10 = {
    getAll: function(callback) {
      return db.query('select * from V10', callback);
    }
  };
  module.exports = v10;