const db = require('../database');

const v2
 = {
  getAll: function(callback) {
    return db.query('select * from v2', callback);
  }
};
module.exports = v2;