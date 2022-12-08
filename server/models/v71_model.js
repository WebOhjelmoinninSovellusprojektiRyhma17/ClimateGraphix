const db = require('../database');

const v71 = {
    getAll: function(callback) {
      return db.query('select * from v71', callback);
    }
  };
  module.exports = v71;