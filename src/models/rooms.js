/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const { request } = require('express');
const db = require('../config/database');
// rajouter un appart
exports.insertRoom = (appart, callback) => {
  // console.log(appart);
  const query = `Insert into airbnb.place (city_id,user_id, name,description, rooms, bathrooms, max_guests, price_by_night, available) values ("${appart.city_id}", "${appart.user_id}","${appart.name}","${appart.description}","${appart.rooms}","${appart.bathrooms}","${appart.max_guests}","${appart.price_by_night}","${appart.available}")`;
  // console.log(query)
  db.query(query, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};

exports.selectRoom = (callback) => {
  const query = 'SELECT * FROM airbnb.place ';
  console.log(query);
  db.query(query, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};

// accéder à sa maison proposée sur le site avec le id user

exports.getRoom = (id, callback) => {
  // eslint-disable-next-line no-template-curly-in-string
  const query = `SELECT *FROM airbnb.users INNER JOIN place WHERE users.id_user= place.user_id AND users.id_user="${id}"`;
  console.log(query);
  db.query(query, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};

exports.deletePlace = (placeId, callback) => {
  db.query(`DELETE FROM airbnb.place
  WHERE id_place="${placeId}" ;`, (error, result) => {
    if (error) {
      console.log('error: ', error);
      callback(error, null);
      return;
    }
    callback(null, result);
  });
};
