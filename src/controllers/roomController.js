// eslint-disable-next-line no-unused-vars
const { res, req } = require('express');

const room = require('../models/rooms');

exports.addRooms = (req, res) => {
 
  room.insertRoom(req.body, (error, result) => {
    if (error) {
      res.json(error.message);
    }else{

    res.json ({'lien':'/api/places'})};
  });
};
