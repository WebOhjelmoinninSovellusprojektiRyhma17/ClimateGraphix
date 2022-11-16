const mysql = require('mysql');
const connection = mysql.createPool({
  host: '34.88.182.164',
  user: 'root',
  password: 'h+AIbhiKX8Of0dO',
  database: 'mydb'
});
module.exports = connection;