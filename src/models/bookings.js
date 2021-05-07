/* eslint-disable no-undef */
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

// ETQ touriste, je veux annuler une réservation
exports.deletePlace = (bookingId, callback) => {
  db.query(`DELETE FROM airbnb.booking
  WHERE booking.id_booking="${bookingId}" ;`, (error, result) => {
    if (error) {
      console.log('error: ', error);
      callback(error, null);
      return;
    }
    callback(null, result);
  });
};

// ETQ touriste, je veux afficher la liste des réservations que j'ai faites

exports.getbookingUSERS = (req, idUser, callback) => {
  // eslint-disable-next-line no-template-curly-in-string
  const query = `SELECT *, city.name city_name, place.name place_name FROM airbnb.booking INNER JOIN place ,users ,city  WHERE booking.place_id= place.id_place   and users.id_user=booking.user_id AND  place.city_id=city.id_city and id_user=${idUser}`;
  console.log(query);
  db.query(query, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};

