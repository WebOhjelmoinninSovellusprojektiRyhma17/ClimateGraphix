const db = require('../database');

const v4eka = {
    getAll: function(callback) {
      return db.query('select * from v4eka', callback);
    }
  };
  module.exports = v4eka;