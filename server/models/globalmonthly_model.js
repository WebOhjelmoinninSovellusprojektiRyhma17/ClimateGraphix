const db = require('../database');

const globalM = {
  getAll: function(callback) {
    return db.query('select * from globalmonthly', callback);
  }
};
module.exports = globalM;