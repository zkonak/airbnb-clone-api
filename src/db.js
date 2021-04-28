 const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"root",
    database:"airbnb"
})
db.connect((error)=>{
    if(error) throw error;
    console.log("connection to database work")
})

module.exports = db;