const db = require('../database');

const northern = {
  getById: function(Time, callback) {
    return db.query('select * from northernhemisphere where Time=?', [Time], callback);
  },
  getAll: function(callback) {
    return db.query('select * from northernhemisphere', callback);
  }
};
module.exports = northern;