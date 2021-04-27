const db = require('../config/database');

exports.getUserData = (requestBody, callback) => {
  db.query(`select * from users where email="${requestBody.email}"`, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};
