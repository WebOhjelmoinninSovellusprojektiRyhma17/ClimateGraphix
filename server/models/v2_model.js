const db = require('../database');

const rawString = String.raw`select date_format(year, '%Y'), T from v2`

const v2
 = {
  getAll: function(callback) {
    return db.query(rawString, callback);
  }
};
module.exports = v2;