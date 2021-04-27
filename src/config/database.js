const mysql = require('mysql2');

// connection à la db
const db = mysql.createConnection({
  host: 'localhost',

  port: 3306,

  user: 'root',
  password: 'samira',
  database: 'airbnb',
});

// je me connecte et rentre dansla callback
db.connect((error) => {
  if (error) throw error;
  console.log('Connection to database works!');
});

module.exports = db;
