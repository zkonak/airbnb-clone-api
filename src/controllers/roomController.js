/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
// eslint-disable-next-line no-unused-vars
const { res, req } = require('express');

const room = require('../models/rooms');
// rajouter un appart
// eslint-disable-next-line no-shadow
exports.addRooms = (req, res) => {
  room.insertRoom(req.body, (error, result) => {
    if (error) {
      res.status(401).json({ error: 'Le champ rooms doit être un nombre entier' });
    } else {
      room.selectRoom((error, result) => {
        res.status(201).json({

          city_id: result[0].city_id,
          user_id: result[0].user_id,
          name: result[0].name,
          description: result[0].description,
          rooms: result[0].rooms,
          bathrooms: result[0].bathrooms,
          max_guests: result[0].max_guests,
          price_by_night: result[0].price_by_night,
          available: result[0].available,

        });
      });
    }
  });
};

// accéder à sa maison proposée sur le site

exports.findRooms = (req, res) => {
  const { id } = req.params;

  const user = req.body.id_user;
  // l'envoi de id permet de référencier les users
  console.log('hi', id);

  room.getRoom(id, (error, result) => {
    if (error) {
      res.status(400).json({ error });
    } else {
      const array = [];
      for (let i = 0; i < result.length; i++) {
        const obj = {
          id_place: result[i].id_place,
          city_id: result[i].city_id,
          user_id: result[i].user_id,
          name: result[i].name,
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
