const db = require('../config/database');

exports.create = (newUser,requestBody,callback) => {
    const query = (`INSERT INTO users VALUES (id_user,"${newUser.email}","${newUser.password}","${newUser.first_name}","${newUser.last_name}","${newUser.role}")`);
    
    console.log(query)
    db.query(query, (error, result) => {
        if (error) {
          callback(error, null);
          return;
        }
    
        callback(null, result);
    });
    };

    exports.getByEmail = (email,callback) =>{
        db.query(`SELECT * FROM users WHERE email = "${email}";`, (error, result) => {
            if (error) {
              console.log("error: ", error);
              callback(error, null);
              return;
            }
        
            callback(null, result);
          })
        }