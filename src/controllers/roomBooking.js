/* eslint-disable camelcase */
/* eslint-disable no-shadow */
const { res, req } = require('express');
const util = require('../utils/utils');

const booking = require('../models/bookings');

// ETQ touriste, je veux réserver un appartement ou une maison
exports.touristBooking = (req, res) => {
  const {
    place_id, user_id, check_in, check_out,
  } = req.body;
  const role = 'hote';
  if (!role) {
    res.status(401).json({ message: 'User not connected' });
  } else if (role === 'tourist') {
    res.status(403).json({ message: "Vous n'êtes pas autorisé à accéder à cette ressource" });
  } else
  if (!user_id || !place_id || !check_in || !check_out) {
    res.status(400).json({ message: 'Missing input' });
  } else {
    booking.bookPlace(req.body, (error, result) => {
      if (error) {
        res.send("Cet appartement n'est pas disponible aux dates demandées");
      }
      res.status(201).json({ message: 'réservation ok' });
    });
  }
};

// ETQ touriste, je veux annuler une réservation

exports.deleteBooking = (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { id_booking } = req.params;
  const role = 'hote';
  if (!role) {
    res.status(401).json({ message: 'User not connected' });
  } else if (role === 'tourist') {
    res.status(404).json({ message: "la demande n'est pas trouvé" });
  } else {
    // eslint-disable-next-line no-unused-vars
    booking.deletePlace(id_booking, (error, result) => {
      if (error) {
        res.send("Cet appartement n'est pas disponible ");
      } else {
        res.status(204).json({ message: 'réservation est annulée' });
      }
    });
  }
};

// ETQ touriste, je veux afficher la liste des réservations que j'ai faites

exports.findAllBooking = (req, res) => {
  
  const { user } = req;
  booking.getbookingUSERS(req.body, user.id_user, (error, result) => {
    if (error) {
      res.json(error.message);
    } else {
      const array = [];
      for (let i = 0; i < result.length; i++) {
        const obj = {
          id: result[i].id_booking,
          place: {
            id_place: result[i].id_place,
            city_id: result[i].city_id,
            city_name: result[i].city_name,
            user_id: result[i].user_id,
            place_name: result[i].place_name,
            description: result[i].description,
            rooms: result[i].rooms,
            bathrooms: result[i].bathrooms,
            max_guests: result[i].max_guests,
            price_by_night: result[i].price_by_night,
            available: result[i].available,
          },
          user: {
            id: result[i].id_user,
            first_name: result[i].first_name,
            last_name: result[i].last_name,
            email: result[i].email,

          },
          check_in: result[i].check_in,
          check_out: result[i].check_out,
        };
        array.push(obj);
      }
      res.status(200).json(array);
    }
  });
};
