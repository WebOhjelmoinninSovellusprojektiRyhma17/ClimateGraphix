const db = require('../database');

const vostok = {
    getAll: function(callback) {
      return db.query('select * from vostok', callback);
    }
  };
  module.exports = vostok;