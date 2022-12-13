const db = require('../database');

const n3 = {
    get: function (callback) {
        return db.query('select * from n3', callback);
    },
    getById: function (id, callback) {
        return db.query('select * from n3 where username=?', [id], callback);
    },
    add: function (user, callback) {
        return db.query('insert into n3 (url,charts,username) values(?,?,?) ',
            [user.url, user.key, user.username], callback);
    },
    delete: function (id, callback) {
        return db.query('delete from n3 where url=?', [id], callback);
    },


};

module.exports = n3;