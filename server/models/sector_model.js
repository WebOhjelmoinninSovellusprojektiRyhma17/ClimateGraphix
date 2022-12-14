const db = require('../database');

const sector = {
  getAll: function(callback) {
    return db.query('select * from sector', callback);
  }
};
module.exports = sector;