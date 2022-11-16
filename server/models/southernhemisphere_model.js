const db = require('../database');

const southern = {
  getById: function(Time, callback) {
    return db.query('select * from southernhemisphere where Time=?', [Time], callback);
  },
  getAll: function(callback) {
    return db.query('select * from southernhemisphere', callback);
  }
};
module.exports = southern;