const place = require('../models/UserSignin');

exports.updatePlace = (request, response) => {
  const { placeId } = request.params;
  //   if (request.user.role === 'tourist') {
  //     response.status(403).json({
  //       message: "Vous n'êtes pas autorisé à accéder à cette ressource",
  //     });
  //   } else {
  place.getPlace(placeId, (error, placeInfo) => {
    if (error) {
      response.status(400).send(error.message);
    } else if (placeInfo.length === 0) {
      response.status(400).json({
        message: "La ressource demandée n'existe pas",
      });
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
  // }
};
