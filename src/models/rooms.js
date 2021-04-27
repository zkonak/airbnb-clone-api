const { request } = require('express');
const db = require('../config/database');

exports.insertRoom = (appart, callback) => {
    console.log(appart);
    let query= `Insert into airbnb.place (city_id,user_id, name,description, rooms, bathrooms, max_guests, price_by_night, available) values ("${appart.city_id}", "${appart.user_id}","${appart.name}","${appart.description}","${appart.rooms}","${appart.bathrooms}","${appart.max_guests}","${appart.price_by_night}","${appart.available}")`;
    console.log(query)
db.query(query, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};
