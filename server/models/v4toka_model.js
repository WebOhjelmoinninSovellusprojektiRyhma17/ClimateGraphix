const db = require('../database');

const v4toka = {
    getAll: function(callback) {
      return db.query('select * from v4toka', callback);
    }
  };
  module.exports = v4toka;