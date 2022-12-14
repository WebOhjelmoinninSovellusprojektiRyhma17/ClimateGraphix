const mysql = require('mysql');

let config = {
    host: '34.88.182.164',
    user: 'root',
    password: 'h+AIbhiKX8Of0dO',
    database: 'mydb',
    timezone: 'UTC',
    dateStrings: [
        'DATE',
        'DATETIME'
    ]
}
let pool = mysql.createPool(config)
pool.on('connection', conn => {
    conn.query("SET time_zone='+00:00';", error => {
        if(error){
            throw error
        }
    })
})

module.exports = pool;    