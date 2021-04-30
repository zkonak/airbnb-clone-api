const { request } = require('express');
const db = require('../config/database');
// ETQ touriste, je veux réserver un appartement ou une maison

exports.bookPlace = (booking, callback) => {
  db.query(`INSERT INTO booking(place_id, user_id, check_in, check_out) VALUES(${booking.place_id}, ${booking.user_id}, "${booking.check_in}", "${booking.check_out}");`, (error, result) => {
    if (error) {
      console.log('error: ', error);
      callback(error, null);
      return;
    }
    callback(null, result);
  });
};
