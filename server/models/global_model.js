const db = require('../database');

const globalA = {
  getAll: function(callback) {
    return db.query('select * from global', callback);
  }
};
module.exports = globalA;