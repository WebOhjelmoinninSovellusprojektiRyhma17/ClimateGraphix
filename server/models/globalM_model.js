const db = require('../database');

const globalM = {
  getById: function(Time, callback) {
    return db.query('select * from globalmontly where Time=?', [Time], callback);
  },
  getAll: function(callback) {
    return db.query('select * from globalmontly', callback);
  }
};
module.exports = globalM;