// /* eslint-disable camelcase */
// /* eslint-disable eqeqeq */
// // /* eslint-disable no-plusplus */
// // /* eslint-disable no-undef */
// // /* eslint-disable eqeqeq */
const { res, req } = require('express');
const util = require('../utils/utils');
// eslint-disable-next-line no-unused-vars
const filter = require('../models/filter');

// ETQ visiteur, je veux rechercher un appartement ou une maison disponible entre deux dates

exports.filterBooking = (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const {filtre} = req.query;
  console.log(req.query)
  // eslint-disable-next-line no-unused-vars
  const { id } = req.params;
  filter.filterRoom(req.query,(error, result) => {
    if (error) {
      res.send(error.message);
   
    } else {
        const array=[];
      for (let i = 0; i < result.length; i++) {
        const obj = {
          id_place: result[i].id_place,
          city_id: result[i].city_id,
          user_id: result[i].user_id,
          place_name: result[i].place_name,
          city_name: result[i].city_name,
          description: result[i].description,
          rooms: result[i].rooms,
          bathrooms: result[i].bathrooms,
          max_guests: result[i].max_guests,
          price_by_night: result[i].price_by_night,
          available: result[i].available,
        };
        array.push(obj);
      }
      res.status(200).json(array);
    }
  });
};
