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

exports.updatePlace = (requestBody, placeId, callback) => {
  db.query(`UPDATE place SET  name=${requestBody.name}, description=${requestBody.description},rooms=${requestBody.rooms},bathrooms=${requestBody.bathrooms},max_guests=${requestBody.max_guests},price_by_night=${requestBody.price_by_night},available=${requestBody.available} WHERE id-place = ${placeId};`, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};
