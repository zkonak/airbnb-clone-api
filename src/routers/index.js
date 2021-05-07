const express = require('express');

const router = express.Router();
const controller = require('../controllers/BookingController');
const isAuth = require('../middlewares/isAuth');

const signupController = require('../controllers/signupController');
const ficheController = require('../controllers/FicheController');
const cityController = require('../controllers/cityController');
const filtreController = require('../controllers/filtreController');

const UserSignInController = require('../controllers/UserSignInController');
const PlaceUpdateController = require('../controllers/PlaceUpdateController');

const roomController = require('../controllers/roomController');

const roomBooking = require('../controllers/roomBooking');

router.get('/', controller.controller);
router.get('/api', (req, res) => {
  res.json({ message: 'hello, world!' });
});

router.post('/api/signin', UserSignInController.signin);
router.patch('/api/places/:placeId', isAuth,PlaceUpdateController.updatePlace);

router.post('/api/places',isAuth, roomController.addRooms);

router.post('/api/signup', signupController.newAccount);
router.get('/api/places/:placeId', ficheController.findPlaces);
router.get('/api/city', cityController.findCity);

router.get('/api/places/:id', roomController.findRooms);
router.post('/api/bookings',isAuth, roomBooking.touristBooking);
router.get('/api/bookings',isAuth, roomBooking.findAllBooking);

router.post('/api/places',isAuth, roomController.addRooms);

router.delete('/api/bookings/:bookingID',isAuth, roomBooking.deleteBooking);

router.get('/api/places', filtreController.filterBooking);
router.delete('/api/places/:placeId',isAuth, PlaceUpdateController.deletePlace);

module.exports = router;
