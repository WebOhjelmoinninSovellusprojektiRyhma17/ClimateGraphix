const db = require('../database');

const southernmonthly = {
  getById: function(Time, callback) {
    return db.query('select * from southernmonthlywhere Time=?', [Time], callback);
  },
  getAll: function(callback) {
    return db.query('select * from southernmonthly', callback);
  }
};
module.exports = southernmonthly;