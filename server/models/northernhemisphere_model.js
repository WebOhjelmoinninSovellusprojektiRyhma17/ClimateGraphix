const db = require('../database');

const northern = {
  getById: function(Time, callback) {
    return db.query('select * from northernannual where Time=?', [Time], callback);
  },
  getAll: function(callback) {
    return db.query('select * from northernannual', callback);
  }
};
module.exports = northern;