const mysql = require('mysql2');
const connection = mysql.createConnection({
  host     : "127.0.0.1",
  user     : 'root',
  password : 'Olamilekan@0955',
  database : 'tfk_bank',
  port: 3306
});


module.exports= connection