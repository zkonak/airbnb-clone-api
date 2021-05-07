const jwt = require('jsonwebtoken');

const SECRET = 'pouetpouet';
const isAuth = (request, response, next) => {
  //const token = request.cookies.authcookie;
  if(!request.headers.authorization){
    response.status(401).json({
      message: 'Vous devez être connecté pour accéder à cette ressource',
    });
  }
  const token = request.headers.authorization.split('Bearer ')[1];
  jwt.verify(token, SECRET, (error, user) => {
    if (error) {
      response.status(401).json({
        message: 'Vous devez être connecté pour accéder à cette ressource',
      });
    } else {
      const {
        // eslint-disable-next-line camelcase

        email, id_user, exp, role,
      } = user;

      // Useless or not ?!
      if (Date.now() / 1000 >= exp) {
        response.clearCookie('authcookie');
        response.status(401).json({
          message: 'Vous devez être connecté pour accéder à cette ressource',
        });
      }
      request.user = { email, id_user, role };

      next();
    }
  });
};

module.exports = isAuth;
