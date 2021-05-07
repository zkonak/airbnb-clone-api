const db = require('../config/database');

exports.getUserData = (requestBody, callback) => {
  db.query(`select * from users where email="${requestBody.email}"`, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};

exports.updatePlace = (requestBody, placeId, callback) => {
  db.query("UPDATE place SET  name='"+requestBody.name+"', description='"+requestBody.description+"',rooms="+requestBody.rooms+",bathrooms="+requestBody.bathrooms+",max_guests="+requestBody.max_guests+",price_by_night="+requestBody.price_by_night+",available="+requestBody.available+" WHERE `id_place` =" +placeId, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};

exports.getPlace = (placeId, callback) => {
  const query = "select p.*,c.name city,p.`id_place` place_id from place p,city c, users u where `id_place`="+placeId+" and `id_city`=p.city_id and `id_user`=p.user_id";
  console.log(query);
  db.query(query, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }

    callback(null, result);
  });
};
