/* eslint-disable no-bitwise */
/* eslint-disable no-undef */
const { request } = require('express');
const db = require('../config/database');
// // ETQ visiteur, je veux rechercher un appartement ou une maison disponible entre deux dates

exports.filterRoom = (filtre, callback) => {
  let query = 'SELECT *,place.name place_name,city.name city_name FROM airbnb.place  inner join city WHERE id_city=city_id   ';
  if (filtre.check_in && filtre.check_out) {
    query = `${query} and available BETWEEN '${filtre.check_in}' And '${filtre.check_out}';`;
    console.log(query);
  } else if (filtre.cityName) {
    query = `${query}  and city.name='${filtre.cityName}'`;
  }

  db.query(query, (error, result) => {
    if (error) {
      console.log('error: ', error);
      callback(error, null);
      return;
    }
    callback(null, result);
  });
};
