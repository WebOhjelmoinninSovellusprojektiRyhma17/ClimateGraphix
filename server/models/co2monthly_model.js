const db = require('../database');

const co2M = {
  getAll: function(callback) {
    return db.query('select * from co2monthly', callback);
  }
};
module.exports = co2M;