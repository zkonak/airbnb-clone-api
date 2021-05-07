const db = require('../config/database');

// accéder à sa maison proposée sur le site avec le id user

exports.findPlaces = (placeId, callback) => {
    // eslint-disable-next-line no-template-curly-in-string
    const query = `SELECT * FROM airbnb.place where place.id_place="${placeId}"`;
    
    db.query(query, (error, result) => {
      if (error) {
        callback(error, null);
        return;
      }
  
      callback(null, result);
    });
  };
  