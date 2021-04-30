const jwt = require('jsonwebtoken');

const SECRET = 'pouetpouet';
const isAuth = (request, response, next) => {
  const token = request.cookies.authcookie;

  jwt.verify(token, SECRET, (error, user) => {
    if (error) {
      response.status(401).json({
        message: 'Vous devez être connecté pour accéder à cette ressource',
      });
    } else {
      const {
        // eslint-disable-next-line camelcase
        email, user_id, exp, role,
      } = user;

      // Useless or not ?!
      if (Date.now() / 1000 >= exp) {
        response.clearCookie('authcookie');
        response.status(401).json({
          message: 'Vous devez être connecté pour accéder à cette ressource',
        });
      }

      request.user = { email, user_id, role };

      next();
    }
  });
};

module.exports = isAuth;
