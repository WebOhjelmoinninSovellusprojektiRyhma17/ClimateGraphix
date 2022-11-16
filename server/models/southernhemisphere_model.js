const db = require('../database');

const southern = {
  getById: function(Time, callback) {
    return db.query('select * from southernannual where Time=?', [Time], callback);
  },
  getAll: function(callback) {
    return db.query('select * from southernannual', callback);
  }
};
module.exports = southern;