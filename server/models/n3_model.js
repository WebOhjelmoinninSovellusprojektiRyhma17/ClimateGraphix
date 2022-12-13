const db = require('../database');

const n3={
      add: function (user, callback) {
          return db.query('insert into user (url,keys,user_username) values(?,?,?)',
            [user.url, user.key, user.user_username], callback);
      },

};
          
module.exports = n3;