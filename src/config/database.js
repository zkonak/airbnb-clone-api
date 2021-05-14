const mysql = require('mysql2');

// connection à la db
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1985Athelete',
  database: 'airbnb',
});

// je me connecte et rentre dansla callback
db.connect((error) => {
  if (error) throw error;
  console.log('Connection to database works!');
});

module.exports = db;
