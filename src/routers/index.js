const express = require('express');

const router = express.Router();
const controller = require('../controllers/BookingController');
const isAuth = require('../middlewares/isAuth');

const UserSignInController = require('../controllers/UserSignInController');
const PlaceUpdateController = require('../controllers/PlaceUpdateController');

const roomController = require('../controllers/roomController');
const roomBooking = require('../controllers/roomBooking');

router.get('/', controller.controller);
router.get('/api', (req, res) => {
  res.json({ message: 'hello, world!' });
});

router.post('/api/places', roomController.addRooms);
router.get('/api/places/:id', roomController.findRooms);

router.post('/api/signin', UserSignInController.signin);
router.patch('/api/places/:placeId', PlaceUpdateController.updatePlace);
router.post('/api/places', isAuth, roomController.addRooms);
router.post('/api/bookings', roomBooking.touristBooking);
router.delete('/api/bookings/:bookingID');

module.exports = router;
