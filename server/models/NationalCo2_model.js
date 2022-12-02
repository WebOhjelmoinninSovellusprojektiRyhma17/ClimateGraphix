const db = require('../database');

const NationalCo2 = {
  getAll: function(callback) {
    return db.query('select * from NationalCo', callback);
  }
};
module.exports = NationalCo2;