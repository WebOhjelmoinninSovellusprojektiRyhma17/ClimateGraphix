const db = require('../database');

const southernmonthly = {
  getAll: function(callback) {
    return db.query('select * from southernmonthly', callback);
  }
};
module.exports = southernmonthly;