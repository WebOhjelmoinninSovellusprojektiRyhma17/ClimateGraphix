const db = require('../database');

const subsector = {
  getAll: function(callback) {
    return db.query('select * from subsector', callback);
  }
};
module.exports = subsector;