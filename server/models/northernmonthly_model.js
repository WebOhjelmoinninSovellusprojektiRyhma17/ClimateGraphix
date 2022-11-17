const db = require('../database');

const northM = {
  getAll: function(callback) {
    return db.query('select * from northernmonthly', callback);
  }
};
module.exports = northM;