const db = require('../database');

const n3={
    add: function (callback) {
          return db.query('insert into n3 (url, key) values(?,?)', callback);
      },
};
          
module.exports = login;