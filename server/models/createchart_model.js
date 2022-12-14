const db = require('../database');
/*
const chart = {
    get: function (callback) {
      return db.query('select * from createchart', callback);
    },
    getById: function (id, callback) {
      return db.query('select * from createchart where chartid=?', [id], callback);
    },
    add: function (user, callback) {
        return db.query('insert into createchart (checkbox1,checkbox2,checkbox3,checkbox4,checkbox5,checkbox6,randomtag) values(?,?,?,?,?,?,?)',
          [checkbox1,checkbox2,checkbox3,checkbox4,checkbox5,checkbox6,randomtag], callback);
    },
    delete: function (id, callback) {
      return db.query('delete from createchart where chartid=?', [id], callback);
    },
  
  }
  module.exports = chart;
  */

  const book = {
    getById: function(id, callback) {
      return db.query('select * from createchart where chartid=?', [id], callback);
    },
    getAll: function(callback) {
      return db.query('select * from createchart', callback);
    },
    add: function(book, callback) {
      return db.query(
        'insert into createchart (checkbox1,checkbox2,checkbox3,checkbox4,checkbox5,checkbox6,randomtag) values(?,?,?,?,?,?,?)',
        [book.checkbox1,book.checkbox2,book.checkbox3,book.checkbox4,book.checkbox5,book.checkbox6,book.randomtag],
        callback
      );
    },
    delete: function(id, callback) {
      return db.query('delete from createchart where chartid=?', [id], callback);
    },
    update: function(id, book, callback) {
      return db.query(
        'update book set name=?,author=?, isbn=? where id_book=?',
        [book.name, book.author, book.isbn, id],
        callback
      );
    }
  };
  module.exports = book;