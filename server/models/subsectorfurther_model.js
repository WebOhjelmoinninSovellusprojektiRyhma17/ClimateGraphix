const db = require('../database');

const subsectorF = {
  getAll: function(callback) {
    return db.query('select * from subsectorfurther', callback);
  }
};
module.exports = subsectorF;