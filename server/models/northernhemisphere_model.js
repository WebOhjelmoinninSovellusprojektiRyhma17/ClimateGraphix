const db = require('../database');

const northern = {
  getAll: function(callback) {
    return db.query('select * from northernannual', callback);
  }
};
module.exports = northern;