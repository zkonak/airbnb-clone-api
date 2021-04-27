// eslint-disable-next-line no-unused-vars
const { res, req } = require('express');

const room = require('../models/rooms');
// rajouter un appart
// eslint-disable-next-line no-shadow
exports.addRooms = (req, res) => {
  room.insertRoom(req.body, (error, result) => {
    if (error) {
      res.status(401).json({ error: "erreur dans l'input" });
    } else {
      room.selectRoom((error, result) => {
        res.status(201).json({
          place: {

            city_id: result[0].city_id,
            user_id: result[0].user_id,
            name: result[0].name,
            description: result[0].description,
            rooms: result[0].rooms,
            bathrooms: result[0].bathrooms,
            max_guests: result[0].max_guests,
            price_by_night: result[0].price_by_night,
            available: result[0].available,
          },
        });
      });
    }
  });
};
