/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/UserSignin');

exports.signin = (request, response) => {
  user.getUserData(request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    } else if (result.length === 0) {
      response.status(401).json({ message: "Votre email n'est pas correct" });
    } else {
      const encryptedPassword = result[0].password;
      bcrypt.compare(request.body.password, encryptedPassword, (errorbcrypt, correct) => {
        if (errorbcrypt) {
          response.send(error.message);
        }

        if (!correct) {
          response.status(401).json({ message: "Votre mot de pass n'est pas correct" });
        } else {
          const SECRET = 'pouetpouet';
          const MAXAGE = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour of expiration
          const userObject = {
            name: result[0].name,
            user_id: result[0].id,
            username: request.body.username, // result[0].username
            exp: MAXAGE,
          };
          jwt.sign(userObject, SECRET, (errorJWT, token) => {
            if (errorJWT) {
              response.send(error.message);
            }

            response.status(200).json({
              token,
              user: {
                role: result[0].role,
                // eslint-disable-next-line space-infix-ops
                // eslint-disable-next-line no-restricted-globals
                // eslint-disable-next-line space-infix-ops
                first_name: result[0].first-name,
                // eslint-disable-next-line space-infix-ops
                last_name: result[0].last-name,
                email: result[0].email,
              },
            });
          });
        }
      });
    }
  });
};
