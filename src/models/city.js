const db = require("../db");

exports.findCity = (callback) => {
    // eslint-disable-next-line no-template-curly-in-string
    const query = `SELECT * FROM airbnb.city`;
    
    db.query(query, (error, result) => {
      if (error) {
        callback(error, null);
        return;
      }
  
      callback(null, result);
    });
  };
  