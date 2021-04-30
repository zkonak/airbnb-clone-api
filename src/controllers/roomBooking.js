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
  const { role } = req.user;
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
