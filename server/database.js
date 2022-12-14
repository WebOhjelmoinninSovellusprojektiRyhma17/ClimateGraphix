const mysql = require('mysql');
const connection = mysql.createPool({
  socketPath: '/cloudsql/phrasal-period-368810:europe-north1:websovellusprojekti17',
  user: 'root',
  password: 'h+AIbhiKX8Of0dO',
  database: 'mydb'
});
module.exports = connection;