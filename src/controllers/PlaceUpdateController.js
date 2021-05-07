const place = require('../models/UserSignin');
const util = require('../utils/utils');
const deletePlace = require('../models/rooms');

exports.updatePlace = (request, response) => {
  const { placeId } = request.params;
  if (request.user.role === 'tourist') {
    response.status(403).json({
      message: "Vous n'êtes pas autorisé à accéder à cette ressource",
    });
  } else {
    place.getPlace(placeId, (error, placeInfo) => {
      if (error) {
        response.status(400).json({ message: error.message });
      } else if (placeInfo.length === 0) {
        response.status(400).json({
          message: "La ressource demandée n'existe pas",
        });
        // } else if (util.variblePlace(request.body).length > 0) {
        //   response.status(400).json({ message: `Le champ ${util.variblePlace(request.body)} n'existe pas` });

        //   // eslint-disable-next-line max-len
        // } else if (util.theTypePlace(request.body).length > 0) {
        //   response.status(400).json({ message: `Le champ ${util.theTypePlace(request.body)} doit être correct type` });
      } else {
        place.updatePlace(request.body, placeId, (errorUpdate, result) => {
          if (errorUpdate) {
            response.status(400).json({ message: errorUpdate.message });
          } else {
            console.log(placeInfo);
            response.status(200).json({

              id: placeInfo[0].place_id,
              city: placeInfo[0].city,
              name: placeInfo[0].name,
              description: placeInfo[0].description,
              rooms: placeInfo[0].rooms,
              bathrooms: placeInfo[0].bathrooms,
              max_guests: placeInfo[0].max_guests,
              price_by_night: placeInfo[0].price_by_night,
              available: placeInfo[0].available,

            });
          }
        });
      }
    });
  }
};

exports.deletePlace = (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { placeId } = req.params;
  const { role } = req.user;
  if (!role) {
    res.status(401).json({ message: 'User not connected' });
  } else if (role === 'tourist') {
    res.status(404).json({ message: "Vous n'êtes pas autorisé à accéder à cette ressource" });
  } else {
    // eslint-disable-next-line no-unused-vars
    deletePlace.deletePlace(placeId, (error, result) => {
      if (error) {
        res.status(404).json({ message: "La ressource demandée n'existe pas" });
      } else {
        res.status(204).json({ message: 'La Place est supprimée' });
      }
    });
  }
};
