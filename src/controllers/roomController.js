/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const { res, req } = require('express');
const util = require('../utils/utils');

const room = require('../models/rooms');
// ajouter une maison

exports.addRooms = (req, res) => {
  const { user } = req;
  console.log(user);
  const { role } = user;
  if (!role) {
    res.status(401).json({ message: 'User not connected' });
  } else if (role === 'tourist') {
    res.status(403).json({ message: "Vous n'êtes pas autorisé à accéder à cette ressource" });
  } else {
    room.insertRoom(req.body, (error, result) => {
      if (error) {
        res.status(400).json({ error });
        console.log(error);
      // } else if (util.theTypePlace(req.body).length > 0) {
      //   res.status(400).json({ message: `Le champ ${util.theTypePlace(req.body)}   n'est pas renseigné` });
      // } else if (util.theTypePlace(req.body).length > 0) {
      //   res.status(400).json({ message: `Le champ ${util.theTypePlace(req.body)}   doit être un nombre entier` });
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
  }
};

// accéder à sa maison proposée sur le site

exports.findRooms = (req, res) => {
  const { id } = req.params;

  // const user = req.body.id_user;

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
