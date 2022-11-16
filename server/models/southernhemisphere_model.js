const db = require('../database');

const southern = {
  getAll: function(callback) {
    return db.query('select * from southernannual', callback);
  }
};
module.exports = southern;