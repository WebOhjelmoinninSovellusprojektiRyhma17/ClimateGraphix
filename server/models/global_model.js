const db = require('../database');

const globalA = {
  getById: function(Time, callback) {
    return db.query('select * from global where Time=?', [Time], callback);
  },
  getAll: function(callback) {
    return db.query('select * from global', callback);
  }
};
module.exports = globalA;