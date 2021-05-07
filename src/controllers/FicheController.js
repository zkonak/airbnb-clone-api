const fiche = require('../models/fiche');

exports.findPlaces = (req, res) => {
  const { placeId } = req.params;

  //const user = req.user.id_user;
  // l'envoi de id permet de référencier les users

  fiche.findPlaces(placeId, (error, result) => {
    if (error) {
      res.status(400).json({ message: "La ressource demandée n'existe pas" });
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
      if (array.length == 0) {
        res.status(400).json({ message: "La ressource demandée n'existe pas" });
      } else {
        res.status(201).json(array);
      }
    }
  });
};
