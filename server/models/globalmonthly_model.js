const db = require('../database');

const globalM = {
  getById: function(Time, callback) {
    return db.query('select * from globalmonthly where Time=?', [Time], callback);
  },
  getAll: function(callback) {
    return db.query('select * from globalmonthly', callback);
  }
};
module.exports = globalM;