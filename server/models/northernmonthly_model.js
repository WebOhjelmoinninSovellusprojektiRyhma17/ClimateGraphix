const db = require('../database');

const northM = {
  getById: function(Time, callback) {
    return db.query('select * from northernmonthly where Time=?', [Time], callback);
  },
  getAll: function(callback) {
    return db.query('select * from northernmonthly', callback);
  }
};
module.exports = northM;