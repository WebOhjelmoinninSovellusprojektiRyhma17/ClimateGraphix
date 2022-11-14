const db = require('../database');

const southernmonthly = {
  getById: function(Time, callback) {
    return db.query('select * from southernmontlywhere Time=?', [Time], callback);
  },
  getAll: function(callback) {
    return db.query('select * from southernmontly', callback);
  }
};
module.exports = southernmonthly;