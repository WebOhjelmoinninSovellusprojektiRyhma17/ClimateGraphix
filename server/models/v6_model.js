const db = require('../database');

const v6 = {
    getAll: function(callback) {
      return db.query('SELECT YEAR(CURDATE()) - age AS age, co2_ppm FROM v6', callback);
    }
  };
  module.exports = v6;