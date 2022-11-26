const db = require('../database');

const v4kolmas = {
    getAll: function(callback) {
      return db.query('select * from v4kolmas', callback);
    }
  };
  module.exports = v4kolmas;