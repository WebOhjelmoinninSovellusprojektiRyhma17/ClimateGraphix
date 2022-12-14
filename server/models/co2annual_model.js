const db = require('../database');

const co2A = {
  getAll: function(callback) {
    return db.query('select * from co2annual', callback);
  }
};
module.exports = co2A;