const mysql = require('mysql2/promise');



console.log(process.env.MYSQL_HOST)
const connection = mysql.createPool({
    host: "localhost" /*process.env.MYSQL_HOST*/,
    user:"root" /*process.env.MYSQL_USER*/,
    password:"root" /*process.env.MYSQL_PASSWORD*/,
    database: "muscle_status_db" /*process.env.MYSQL_DB*/
});

module.exports = connection;